import LoginForm from "@/src/components/auth/LoginForm";
import PageWrapper from "@/src/components/shared/PageWrapper";
import { Routes } from "@/src/constants/Routes";
import useStore from "@/src/zustand";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Login = () => {
  const router = useRouter();
  const fetchUser = useStore((state) => state.user);
  console.log(fetchUser);

  useEffect(() => {
    if (fetchUser !== null) {
      router.replace(Routes.HOME);
    }
  }, [fetchUser, router]);
  return (
    <PageWrapper>
      <LoginForm />
    </PageWrapper>
  );
};

export default Login;
