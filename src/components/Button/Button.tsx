import type { ButtonHTMLAttributes, ReactNode } from "react";
import classes from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isActive?: boolean;
}

export default function Button({
  children,
  isActive = true,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={
        isActive ? `${classes.button} ${classes.active}` : `${classes.button}`
      }
    >
      {children}
    </button>
  );
}
