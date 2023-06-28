import React, { useState } from 'react';
import "./styles.scss"
import { Collapse } from '@mui/material';
import InputCard from '../InputCard';

const InputContainer = ({listId, type}) => {

const [open, setOpen] = useState(false);
  
  return (
    <div className="input-container">
      <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      </Collapse>
      <Collapse in={!open}>
        <div className="input-content">
          <button onClick={() => setOpen(!open)}>
            {type === "card" ? "+ Add Card" : "+ Add List"}
          </button>
        </div>
      </Collapse>
    </div>
  );
}

export default InputContainer;