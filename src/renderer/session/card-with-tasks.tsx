import React,{FC,Component } from "react";
import QuantityPicker from '../component/QuantityPicker';
import  { ReactComponent as PlayIcon } from '../../../assets/icons/play.svg';
import Form from 'react-bootstrap/Form';
import  { ReactComponent as TaskIcon } from '../../../assets/icons/task.svg';

import InputGroup from 'react-bootstrap/InputGroup';

  const handl=()=>{
    console.log("here");
  }


const Task: FC<{  }> = ({ }) => {
  return (
   <InputGroup className="mb-3 task border1">
        <InputGroup.Checkbox className="task-checkbox checkbox-round" aria-label="Checkbox for following text input" />
        <label className="task-text">Task 1</label>
        
      </InputGroup>
  );
};

const CardWithTasks = () => (


  <div className="session" >
  
      <div style={{display:"flex",    alignItems: "center",fontSize:"x-large"}}><TaskIcon style={{margin:"3px",fill:"#484a4d"}}/>
      Tasks 
      </div>
      Select a task for focus session
    <div id="task-list" className="#style-8">
    <Task></Task>
    <Task></Task>
     <Task></Task>
    <Task></Task>
    <Task></Task>
    <Task></Task>
    <Task></Task>
    <Task></Task>
     <Task></Task>
    <Task></Task>
    <Task></Task>
    <Task></Task>
    <Task></Task>
    <Task></Task>
     <Task></Task>
    <Task></Task>
    <Task></Task>
    <Task></Task>
    </div>
    
      
  
   </div>
  
);

export default React.memo(CardWithTasks);
