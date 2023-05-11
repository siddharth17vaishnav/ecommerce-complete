import type { AppProps } from "next/app";
import WithLoader from "../components/shared/WithLoader/WithLoader";
import CustomSnackbar from "../components/shared/CustomSnackBar/CustomSnackBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WithLoader>
      <CustomSnackbar />
      <Component {...pageProps} />
    </WithLoader>
  );
}

export default MyApp;
