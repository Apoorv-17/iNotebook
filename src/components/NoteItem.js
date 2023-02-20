import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note } = props;
  return (
    <div className="col-md-3 my-3">
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img
          variant="top"
          src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/11/how-to-wake-up-early.png"
        /> */}
        <Card.Body>
          <div className="d-flex align-items-center">
            <Card.Title>{note.title}</Card.Title>
            <i
              className="fa fa-trash-alt mx-2"
              onClick={() => {
                deleteNote(note._id);
              }}
            ></i>
            <i className="fa fa-pencil-square-o mx-2"></i>
          </div>
          <Card.Text>{note.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NoteItem;
