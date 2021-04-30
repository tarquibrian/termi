import React from "react";
import Navbar from "../layout/Navbar";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div className="not-found color-white">
        <h1 className="display-1">Page Not Found</h1>
      </div>
    </div>
  );
};

export default NotFound;
