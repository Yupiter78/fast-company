import React from "react";

const SearchStatus = ({ length }) => {
  const getBadgeClasses = () => {
    let classes = "badge bg-";
    classes += length === 0 ? "danger" : "primary";
    return classes;
  };

  const renderPhrase = (number) => {
    const exceptions = ["2", "3", "4"];
    return exceptions.includes(number.toString().substr(-1, 1)) &&
      number.toString().substr(-2, 1) !== "1"
      ? "человека тусанут"
      : "человек тусанёт";
  };

  const getHeaderText = () => {
    return length === 0
      ? "Никто с тобой не тусанёт"
      : `${length}  ${renderPhrase(length)} с тобой сегодня`;
  };
  return (
    <h2>
      <span className={getBadgeClasses()}>{getHeaderText()}</span>
    </h2>
  );
};

export default SearchStatus;
