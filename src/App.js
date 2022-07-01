import "./styles.css";

import AddNote from "./addnote";
import Notes from "./notes";
import Header from "./header";
import DeletedNotesComponent from "./deletednotes";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Notes />
      <AddNote />
      <DeletedNotesComponent />
    </div>
  );
}
