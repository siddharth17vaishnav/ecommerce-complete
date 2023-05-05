const { check, validationResult } = require("express-validator");
import { Request, Response, NextFunction } from "express";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
export const validateUser = [
    check("first_name").not().isEmpty().withMessage("first name is requried"),
    check("last_name").not().isEmpty().withMessage("last name is required"),
    check("email").trim().isEmail().withMessage("invalid email address"),
    check('password').matches(passwordRegex).withMessage("Password must be at least one lowercase, one uppercase, one number, one special character and minimum 6 character and maximum 16 character"),
    check('mobile').isNumeric().isLength({ min: 10, max: 10 }).withMessage("invalid mobile number"),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({
                error: {
                    message: errors
                        .array()
                        .map(
                            (err: {
                                type: string;
                                value: string;
                                msg: string;
                                path: string;
                                location: string;
                            }) => {
                                return err.msg;
                            }
                        )
                        .join(", "),
                },
            });
        next();
        return;
    },
];

