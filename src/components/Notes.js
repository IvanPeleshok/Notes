import React from "react";

const Notes = ({ notes, deleteNotes }) => {
  return (
    <ul className="list-group">
      {notes.map((item) => (
        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
          <div className="text__overflow">
            <strong className="px-2">{item.title}</strong>
            <br/>
            <small className="px-2">{item.date}</small>
          </div>
          <button style={{marginLeft:"10px"}}type="button" className="btn btn-danger" onClick={() => deleteNotes(item.id)}>&times;</button>
        </li>
      ))}
    </ul>
  );
};

export default Notes;
