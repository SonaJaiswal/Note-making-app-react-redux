import React, { useState } from "react";
import { connect } from "react-redux";
import { addAction } from "../../reducer/index";

const AddNoteDialg = ({ isOpen, closeModal, addNote, ...otherProps }) => {
  const [note, setNote] = useState("");
  const createNote = () => {
    addNote(note);
    closeModal();
  };

  return (
    isOpen && (
      <div>
        <input value={note} onChange={(ev) => setNote(ev.target.value)} />
        <button onClick={createNote}>Add</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    )
  );
};

const mapDispatchToProps = (dispatch) => ({
  addNote: (note) => dispatch(addAction(note))
});

export default connect(null, mapDispatchToProps)(AddNoteDialg);
