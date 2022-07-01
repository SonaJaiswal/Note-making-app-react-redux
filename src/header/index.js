import { connect } from "react-redux";
const Header = ({ totalNotesCount }) => (
  <h4>You have {totalNotesCount} notes in total</h4>
);

export default connect(
  (state) => ({ totalNotesCount: state.notes.length }),
  null
)(Header);
