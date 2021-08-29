import React from "react";

const BookMark = ({ status, onToggleBookMark, id }) => {
  const getIconClasses = (userStatus) => {
    let classes = "btn-sm bi bi-bookmark";
    if (userStatus) {
      classes += "-heart-fill";
    }
    return classes;
  };

  return (
    <>
      <button
        onClick={() => onToggleBookMark(id)}
        className={getIconClasses(status)}
      />
    </>
  );
};

export default BookMark;
