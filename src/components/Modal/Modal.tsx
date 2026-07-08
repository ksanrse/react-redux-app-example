import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

export default function Modal({
  children,
  open,
}: {
  children: ReactNode;
  open: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [open]);

  const modalRoot = document.getElementById("modal");

  if (!modalRoot) return null;

  return createPortal(
    <dialog ref={dialog} className={classes.modal}>
      {children}
    </dialog>,
    modalRoot,
  );
}
