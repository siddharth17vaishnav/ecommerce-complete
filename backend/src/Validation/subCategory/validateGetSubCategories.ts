const { param, validationResult } = require("express-validator");
import { Request, Response, NextFunction } from "express";

export const validateGetSubCategories = [
    param("categoryId").not().isEmpty().withMessage("category ID is requried"),
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

