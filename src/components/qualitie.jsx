import React from "react";

const Qualitie = ({ qualities }) => {
  return (
    <>
      {qualities.map(({ _id, color, name }) => (
        <span key={_id} className={`badge me-2 bg-${color}`}>
          {name}
        </span>
      ))}
    </>
  );
};

export default Qualitie;
