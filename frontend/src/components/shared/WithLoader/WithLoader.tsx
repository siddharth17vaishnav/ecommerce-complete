import useStore from "@/src/zustand";
import { ReactNode } from "react";
import { LoaderWrapper } from "./styles";
import { CircularProgress } from "@mui/material";

interface WithLoaderProps {
  children: ReactNode;
}

const WithLoader = ({ children }: WithLoaderProps) => {
  const loading = useStore((state) => state.loading);

  return (
    <>
      {loading ? (
        <LoaderWrapper>
          <CircularProgress />
        </LoaderWrapper>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default WithLoader;
