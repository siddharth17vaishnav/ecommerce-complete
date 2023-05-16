import { Button } from "@mui/material";
import React from "react";

interface CustomButtonProps {
  label: string;
  onClick?: () => void;
  variant?: VARIANT;
  type?: string;
}
export enum VARIANT {
  OUTLINED = "outlined",
  CONTAINED = "contained",
}

const CustomButton = ({
  label,
  variant = VARIANT.CONTAINED,
  onClick,
}: CustomButtonProps) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {label}
    </Button>
  );
};

export default CustomButton;
