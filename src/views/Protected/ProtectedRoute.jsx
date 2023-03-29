import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

const ProtectedRoute = () => {
  const { user } = useContext(UserContext);
  if (user) {
    return (
      <>
        <Outlet></Outlet>
      </>
    );
  } else {
    return <Navigate to={"/"}></Navigate>;
  }
};

export default ProtectedRoute;
