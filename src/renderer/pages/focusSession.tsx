import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap'
import CardWithSession from '../session/card-with-session'
import CardWithTasks from '../session/card-with-tasks'
import CardWithProgress from '../session/card-with-progress'
import  Apps from '../component/Navigation'

const focusSession = () => {
    let container = React.createRef();
  let state = {
    open: false,
    selectValue: null, 
      // filterData: ['India', 'Canada', 'Srilanka', 'Afghanisthan']
  };
  const handleButtonClick = () => {
    state.open=true;
  };


    
  return (
   
    <div  color="#F9F9F9"  id='app' style={{height: "100%"}} >

      <div id="mainbody" className='#style-8'>
        <div id="wrap">
          <CardWithSession />
          <CardWithTasks />
        </div>
        <div id="wrap">
          <CardWithProgress/>
        </div>
      </div>
    </div>
     
  );
}

export default React.memo(focusSession);