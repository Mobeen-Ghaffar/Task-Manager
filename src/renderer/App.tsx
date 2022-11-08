import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap'
import CardWithSession from './session/card-with-session'
import  Apps from './component/Navigation'
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


    const mystyle = {
      height: "100%",
     overflow: "auto",
    };
  return (
   
    <div  color="#F9F9F9"  id='app' style={{height: "100%"}} >
    <Apps></Apps>
    <div>
      <CardWithSession></CardWithSession>
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
