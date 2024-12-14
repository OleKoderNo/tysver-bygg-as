import React from "react";

interface TextComponentProps {
  children: React.ReactNode;
  className?: string; // Allow additional class names if needed
}

const TextComponent: React.FC<TextComponentProps> = ({
  children,
  className,
}) => {
  return (
    <span
      className={`text-orange-500 px-4 font-medium text-2xl ${className || ""}`}
    >
      {children}
    </span>
  );
};

export default TextComponent;
