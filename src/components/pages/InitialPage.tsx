import React from "react";
import { Navigate } from "react-router-dom";

const InitialPage = () => {
  return <Navigate to="/list" replace />;
};

export default InitialPage;
