import { Container } from "@mui/material";
import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return <Container maxWidth={"sm"}>{children}</Container>;
};

export default PageWrapper;
