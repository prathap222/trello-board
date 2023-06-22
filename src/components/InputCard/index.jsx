import React, { useState } from 'react';
import "./styles.scss"
import { Clear } from '@mui/icons-material';

const InputCard = ({setOpen, listId, type}) => {

const [title, setTitle] = useState("");

  return (
    <div className='input-card'>
      <div className='input-card-container'>
        <textarea className='input-text' placeholder={
          type === "card" ? "Enter a title of the card" : "Enter list here"
        } autoFocus/>

      </div>
      <div className='confirm'>
      <button className='button-confirm'>
        {type === "card" ? "Add Card" : "Add List"}
      </button>
      <button className='button-cancel'>
        <Clear/>
      </button>
      </div>
    </div>
  )
}

export default InputCard;