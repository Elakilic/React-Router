import React from "react";
import { useNavigate } from "react-router-dom";

function Mission() {
  const navigate = useNavigate();
  //navigate'in içine -1 yazarak da geri dönülebilir.
  return (
    <>
      <div>Home</div>
      <button onClick={() => navigate("/")}>Geriye Dön</button> 
    </>
  );
}

export default Mission;
