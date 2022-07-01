import { connect } from "react-redux";

const DeletedNotesComponent = ({ deletedNotes }) => {
  return (
    <div>
      {deletedNotes.map((deletedNote, idx) => (
        <div>{deletedNote}</div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  deletedNotes: state.deletednotes
});

export default connect(mapStateToProps, null)(DeletedNotesComponent);
