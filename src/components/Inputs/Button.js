import React from "react";

const Button = ({ text }) => {
  return (
    <div className="lower-btn">
      <button
        className="btn btn-r mb-0 bg-success text-light px-4 py-2"
        type="submit"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
