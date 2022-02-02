import React from "react";

export const Spinner = () => {
  return (
    <div className="spinner__page">
      <div className="logo__and__spinner">
        <img
          src={process.env.PUBLIC_URL + "/images/loadingLogo.svg"}
          alt="logo loading screen"
        />
        <div className="spinner"></div>
      </div>
    </div>
  );
};
