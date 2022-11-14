
import QuantityPicker from '../component/QuantityPicker';
import  { ReactComponent as PlayIcon } from '../../../assets/icons/play.svg';
import React, { Component } from 'react';
import Timer from './timer'
// import Timer from '../component/Timer'
  const handl=()=>{
    console.log("here");
  }

const CardWithSession = () => (


  <div className="session">
  <div className="align-middle align-items-center d-flex gap-2" style={{textAlign:"center",fontSize:"x-large"}} color="0x99999">
    Ready, set, focus!
  </div>
  <div style={{textAlign:"center",fontSize:"smaller",margin:"inherit"}}>Achieve your goals and get more done with focus sessions.</div>
  
  <QuantityPicker min={15} max={60} />

  <div style={{textAlign:"center",fontSize:"smaller",margin:"inherit"}}>You'll have no break</div>
  
    <button className="session-button border" onClick={handl}>

        <PlayIcon style={{fill:"var(--text-color)"}}></PlayIcon>

       Start focus session
          </button>
  {/* <span className="icon-button"  style={{marginLeft:"auto"}}><PlayIcon></PlayIcon></span> */}
 {/* <Timer></Timer> 
<timer></timer>*/}
{/* <Timer></Timer> */}
  </div>
  
  
);

export default React.memo(CardWithSession);
