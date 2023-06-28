import { DeleteOutline } from '@mui/icons-material';
import React, { useContext, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import TextareaAutosize from "react-textarea-autosize";
import "./styles.scss"
import storeApi from "../../utils/storeApi"
const Card = ({card,listId,index}) => {

const [open, setOpen] = useState(false)
const [newTitle, setNewTitle] = useState(card.title);
const { removeCard, updateCardTitle } = useContext(storeApi);

const handleOnBlur =()=> {
  updateCardTitle(newTitle, index, listId);
  setOpen(!open);
}

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <div className="card-content">
            {open ? (
              <TextareaAutosize
                type="text"
                className="input-card-title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                onBlur={handleOnBlur}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleOnBlur(card.id);
                  }
                  return;
                }}
                autoFocus
              />
            ) : (
              <div
                onClick={() => setOpen(!open)}
                className="card-title-container"
              >
                <p>{card.title}</p>
                <button
                  onClick={() => {
                    removeCard(index, listId, card.id);
                  }}
                >
                  <DeleteOutline />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;