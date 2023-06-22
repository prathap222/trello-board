import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import sample from "../../utils/sample"
import List from '../List';
import InputContainer from '../InputContainer';

const Home = () => {
  const [lists, setLists] = useState(sample.lists);

  return(
    <div>
      <DragDropContext>
       <Droppable droppableId="app" type="list" direction="horizontal">
       {(provided)=> (
          <div className="wrapper" ref={provided.innerRef}> 
            {
              lists.map((list, index)=> {
                return <List list={list} key={list.id} index={index} />;
              })
            }
            <div> 
              <InputContainer type="list"/>
             </div>
            {provided.placeholder}

          </div>
        )
       }
       </Droppable>
      </DragDropContext>
    </div>
  ); 
};

export default Home;