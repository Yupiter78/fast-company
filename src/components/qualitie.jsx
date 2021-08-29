import React from "react";

const Qualitie = ({ qualities }) => {
  const spanElem = qualities.map((quality) => (
    <span key={quality._id} className={`badge me-2 bg-${quality.color}`}>
      {quality.name}
    </span>
  ));
  return <div>{spanElem}</div>;
};

export default Qualitie;
