import { CardElement } from "./styled";
import Button from "@atlaskit/button";

const NotesCard = ({ note, onDelete }) => {
  const localFunction = (ev) => {
    onDelete(ev);
  };

  return (
    <CardElement>
      <p>{note}</p>
      <Button onClick={onDelete}>Delete</Button>
    </CardElement>
  );
};

export default NotesCard;
