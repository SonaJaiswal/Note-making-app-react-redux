import Button from "@atlaskit/button";
import React from "react";
import AddNoteModal from "./addnotedialg";

export default ({ onClick }) => {
  const [showAddNoteDialog, setShowAddNoteDialog] = React.useState(true);

  const handleClick = () => {
    setShowAddNoteDialog(false);
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      <Button appearance="primary" onClick={() => setShowAddNoteDialog(true)}>
        Add new note
      </Button>
      <AddNoteModal isOpen={showAddNoteDialog} closeModal={handleClick} />
    </>
  );
};
