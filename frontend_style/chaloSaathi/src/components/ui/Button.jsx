// src/components/ui/Button.jsx
import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
