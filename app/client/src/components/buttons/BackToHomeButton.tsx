import React from "react";
import { useNavigate } from "react-router-dom";

const BackToHomeHome = () => {
  const navigate = useNavigate();
  const goBackHome = () => {
    navigate("/");
  };
  return <button onClick={goBackHome}>HOME</button>;
};

export default BackToHomeHome;
