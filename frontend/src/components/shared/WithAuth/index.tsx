import useStore from "@/src/zustand";
import React, { ReactNode, useEffect } from "react";

interface WithAuthProps {
  children: ReactNode;
}

const WithAuth = ({ children }: WithAuthProps) => {
  const fetchUser = useStore((state) => state.fetchUser);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return <div>{children}</div>;
};

export default WithAuth;
