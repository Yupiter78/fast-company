import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  onDelete,
  status,
  onToggleBookMark,
}) => {
  return (
    <tr key={_id}>
      <th scope="row">{name}</th>
      <td>
        <Qualitie qualities={qualities} />
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}/5</td>
      <td>
        <BookMark status={status} onClick={() => onToggleBookMark(_id)} />
      </td>
      <td>
        <button onClick={() => onDelete(_id)} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
