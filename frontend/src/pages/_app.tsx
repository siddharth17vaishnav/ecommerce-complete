import type { AppProps } from "next/app";
import WithLoader from "../components/shared/WithLoader/WithLoader";
import CustomSnackbar from "../components/shared/CustomSnackBar/CustomSnackBar";
import WithAuth from "../components/shared/WithAuth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WithAuth>
      <WithLoader>
        <CustomSnackbar />
        <Component {...pageProps} />
      </WithLoader>
    </WithAuth>
  );
}

export default MyApp;
