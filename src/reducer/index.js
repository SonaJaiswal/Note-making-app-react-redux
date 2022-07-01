export const ADD = "ADD";
export const DELETE = "DELETE";

export function addAction(note) {
  return {
    type: ADD,
    payload: note
  };
}
export function deleteAction(idx) {
  return {
    type: DELETE,
    payload: idx
  };
}

const initialState = { notes: ["Note1", "Note2"], deletednotes: [] };

function addReducer(state = initialState, action) {
  console.log(state, action);

  switch (action.type) {
    case ADD:
      console.log(state.notes);
      const currentNotes = [...state.notes];
      currentNotes.push(action.payload);
      return { ...state, notes: currentNotes };

    case DELETE:
      const newNotes = state.notes.filter((_, i) => i !== action.payload);
      const deletednote = state.notes[action.payload];
      const deletednotes = [...state.deletednotes];
      deletednotes.push(deletednote);
      return { ...state, notes: newNotes, deletednotes };

    default:
      return state;
  }
}

export default addReducer;
