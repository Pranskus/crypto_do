import React, { useEffect } from "react";
import "./InfoDialog.css";

interface InfoDialogProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
  duration?: number;
}

const InfoDialog: React.FC<InfoDialogProps> = ({
  isOpen,
  message,
  onClose,
  duration = 1000,
}) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  return (
    <div className="info-dialog-overlay">
      <div className="info-dialog">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default InfoDialog;
