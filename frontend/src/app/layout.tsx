"use client";
import CustomSnackbar from "@/src/components/shared/CustomSnackBar/CustomSnackBar";
import WithLoader from "../components/shared/WithLoader/WithLoader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <WithLoader>
          <CustomSnackbar />
          <>{children}</>
        </WithLoader>
      </body>
    </html>
  );
}
