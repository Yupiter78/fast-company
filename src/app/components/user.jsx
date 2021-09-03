import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
import PropTypes from "prop-types";

const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    onDelete,
    status,
    onToggleBookMark
}) => {
    return (
        <tr key={_id}>
            <th scope="row">{name}</th>
            <td>
                {qualities.map((quality) => (
                    <Qualitie key={quality._id} {...quality} />
                ))}
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate}/5</td>
            <td>
                <BookMark
                    status={status}
                    onClick={() => onToggleBookMark(_id)}
                />
            </td>
            <td>
                <button
                    onClick={() => onDelete(_id)}
                    className="btn btn-danger"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.any,
    qualities: PropTypes.array.isRequired,
    profession: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleBookMark: PropTypes.func.isRequired
};

export default User;
