import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap'
import CardWithSession from './session/card-with-session'
import CardWithTasks from './session/card-with-tasks'
import  Apps from './component/Navigation'
// import SimpleBar from 'simplebar-react';
// import 'simplebar-react/dist/simplebar.min.css';


const Hello = () => {
  let container = React.createRef();
  let state = {
    open: false,
    selectValue: null, 
      filterData: ['India', 'Canada', 'Srilanka', 'Afghanisthan']
  };
  // let state = {
  //   open: false,
  // };
  const handleButtonClick = () => {
    state.open=true;
    // setState((state) => {
    //   return {
    //     open: !state.open,
    //   };
    // });
  };
//   const handleClickOutside = (event) => {
//   if (
//     container.current &&
//     !container.current.contains(event.target)
//   ) {
//     setState({
//       open: false,
//     });
//   }
// };


    
  return (
   
    <div  color="#F9F9F9"  id='app' style={{height: "100%"}} >
    <Apps></Apps>

    <div id="mainbody" className='#style-8'>
      <CardWithSession />
      <CardWithTasks />
      <CardWithTasks />
      <CardWithTasks />
      <CardWithTasks />
      <CardWithTasks />
      <CardWithTasks />
      <CardWithTasks />
      <CardWithTasks />
      <CardWithTasks />
      <CardWithTasks />
      <CardWithTasks />
      <CardWithTasks />
      <CardWithTasks />
      <CardWithTasks />

    </div>
    
      </div>
     
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
