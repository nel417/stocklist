import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Why = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div style={{padding: 10}}>
      <pre>
        Bad design inspires me ... bad design makes you stop and question stuff
        ... and sometimes, bad design might even be better - Virgil Abloh
      </pre>
      <button onClick={goToHome}>Home</button>
    </div>
  );
};


export default Why;
