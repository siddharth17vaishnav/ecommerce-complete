import * as dotenv from "dotenv";
import express from "express";
import { User } from "../Entities/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


dotenv.config();
let refreshTokens: string[] = [];



export const getUsers = async (req: express.Request, res: express.Response) => {
  try {
    dotenv.config();
    const users = await User.find();
    res.status(200).send({ data: users });
  } catch (err) {
    res.status(403).send({ message: err.message });
  }
};

export const createUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { first_name, last_name, email, password, mobile } = req.body;
    const existing = await User.findOneBy({ email });
    console.log(req.file, req.body)
    if (!existing) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = await User.createQueryBuilder()
        .insert()
        .into(User)
        .values({
          first_name,
          last_name,
          email,
          mobile,
          password: hashedPassword,
          type: 'user',
          profile: req.file && req.file.filename
        })
        .returning("*")
        .execute();
      if (process.env.ACCESS_SECRET && process.env.REFRESH_SECRET) {
        const generateAccessToken = jwt.sign(
          { userId: user.raw[0].id, email: user.raw[0].email },
          process.env.ACCESS_SECRET,
          { expiresIn: "30m" }
        );
        const generateRefreshToken = jwt.sign(
          { userId: user.raw[0].id, email: user.raw[0].email },
          process.env.REFRESH_SECRET,
          { expiresIn: "30d" }
        );
        refreshTokens.push(generateRefreshToken);
        res.status(200).send({
          user: user.raw[0],
          accessToken: generateAccessToken,
          refreshToken: generateRefreshToken,
        });
      }
    } else {
      res.status(401).send({ message: "User Already Exists" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const getUserByID = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { email } = req.params;
    const user = await User.findOneBy({ email });
    res.status(200).send({ data: user });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const approveAdmin = async (req: express.Request, res: express.Response) => {
  try {
    const { email } = req.params;
    const user = await User.findOneBy({ email });
    if (!user) {
      res.status(404).send({ message: "User not found!" })
    }
    else {
      const approveAdmin = await User.createQueryBuilder().update(User).set({ type: 'admin' }).where("id =:id", { id: user.id }).returning('*').execute()
      if (approveAdmin) {
        res.status(200).send({ message: "Approved" })
      }
      else {
        res.status(403).send({ message: 'Something went wrong!' })
      }
    }
  }
  catch (err) {
    res.status(500).send({ message: err.message });
  }
}

module.exports = { getUsers, createUser, getUserByID, approveAdmin };
