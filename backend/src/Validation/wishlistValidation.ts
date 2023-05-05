const { validationResult, param } = require("express-validator");
import { Request, Response, NextFunction } from "express";

export const validateWishList = [
    param("type").matches(/^like|dislike$/).withMessage("invalid operation it must be either 'like' or 'dislike'"),
    param("productId").not().isEmpty().withMessage("product ID is required"),
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

