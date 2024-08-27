import { toast } from "react-toastify";

export const showErrorMessage = (message) => {
  toast.error(message, {
    className: "toast-error-container",
  });
};

export const showSuccessMessage = (message) => {
  toast.success(message, {
    className: "toast-success-container",
  });
};

export const showWarningMessage = (message) => {
  toast.warn(message, {
    className: "toast-warn-container",
  });
};

export const showInfoMessage = (message) => {
  toast.info(message, {
    className: "toast-info-container",
  });
};

export const showComingSoon = () => {
  showInfoMessage("Coming Soon !!!");
};
