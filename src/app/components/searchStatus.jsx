import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
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
            <span
                className={"badge bg-" + (length === 0 ? "danger" : "primary")}
            >
                {getHeaderText()}
            </span>
        </h2>
    );
};

SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};

export default SearchStatus;
