import React from "react";

/**
 * Button
 * Renders a link when `href` is provided, otherwise a real <button>.
 * variant: "primary" (mint gradient) | "outline" (mint border)
 */
const Button = ({
  variant = "primary",
  href,
  children,
  className = "",
  onClick,
  ...props
}) => {
  const classes = `${variant === "outline" ? "btn-outline" : "btn-primary"} ${className}`;

  // External links get the correct attributes; in-page links (#contact) do not.
  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
