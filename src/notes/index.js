import NoteCard from "./notescard";
import { connect } from "react-redux";
import { deleteAction } from "../reducer/index";

const NoteComponent = ({ notes, deleteNoteAt }) => {
  return (
    <div>
      {notes.map((note, idx) => (
        <NoteCard note={note} onDelete={() => deleteNoteAt(idx)} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  notes: state.notes
});

const mapDispatchToProps = (dispatch) => ({
  deleteNoteAt: (idx) => dispatch(deleteAction(idx))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteComponent);
