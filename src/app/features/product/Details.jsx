import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Details = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Details Component{params.id}</h1>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};
