import { Alert, Snackbar } from "@mui/material";
import { SnackbarSeverity } from "@/src/types/snackbar.types";
import useStore from "@/src/zustand";
import { BlockOutlined, Check, Error as ErrorIcon } from "@mui/icons-material";

const CustomSnackbar = () => {
  const {
    severityZustand,
    messageZustand,
    openZustand,
    resetSnackbar,
    autoHideDuration,
  } = useStore((state) => ({
    severityZustand: state.severity,
    messageZustand: state.message,
    openZustand: state.snackbarOpen,
    resetSnackbar: state.resetSnackbar,
    autoHideDuration: state.autoHideDuration,
  }));

  const handleClose = () => {
    resetSnackbar();
  };

  const getIcon = (severity: SnackbarSeverity) => {
    switch (severity) {
      case SnackbarSeverity.error:
        return <BlockOutlined fontSize="inherit" color="error" />;
      case SnackbarSeverity.success:
        return <Check fontSize="inherit" color="success" />;
      case SnackbarSeverity.info:
        return <ErrorIcon fontSize="inherit" color="info" />;
      default:
        return null;
    }
  };

  return (
    <Snackbar
      open={openZustand}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
        icon={getIcon(severityZustand!)}
        severity={severityZustand}
      >
        {messageZustand}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
