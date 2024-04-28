import React from "react";
import "./Errormessage.css";
function Errormessage({ data }) {
  return <div className="error">{data.message}</div>;
}

export default Errormessage;
