import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import linksData from "../../data";

const LinkPage = () => {
  const { linkName } = useParams();
  const navigate = useNavigate();
  const link = linksData.find((l) => l.name === linkName);

  if (!link) {
    return <div>Link not found</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 800,
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h1 style={{marginTop: 64, fontSize: 44}}>{link.name}</h1>
      <img src={link.image} alt={link.name} style={{ width: 400 }} />
      <p>{link.description}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default LinkPage;
