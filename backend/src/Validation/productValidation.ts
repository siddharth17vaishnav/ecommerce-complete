const { check, validationResult } = require("express-validator");
import { Request, Response, NextFunction } from "express";
export const validateProduct = [
    check("name").not().isEmpty().withMessage("name is requried"),
    check("description").not().isEmpty().withMessage("description is required"),
    check("price").isNumeric().withMessage("price must be numeric").not().isEmpty().withMessage("price is required"),
    check('categoryID').not().isEmpty().withMessage("category ID is required"),
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

