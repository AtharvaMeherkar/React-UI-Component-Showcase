// src/components/Button.jsx
import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  ...props
}) => {
  // Base styles for all buttons
  let baseClasses = "btn-base";

  // Size variations
  if (size === "sm") {
    baseClasses += " btn-sm";
  } else if (size === "lg") {
    baseClasses += " btn-lg";
  } else {
    // md
    baseClasses += " btn-md";
  }

  // Variant styles
  if (variant === "primary") {
    baseClasses += " btn-primary";
  } else if (variant === "secondary") {
    baseClasses += " btn-secondary";
  } else if (variant === "danger") {
    baseClasses += " btn-danger";
  } else if (variant === "outline") {
    baseClasses += " btn-outline";
  } else if (variant === "ghost") {
    baseClasses += " btn-ghost";
  }

  return (
    <button
      className={`${baseClasses} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
