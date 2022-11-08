import React from "react";
import QuantityPicker from '../component/QuantityPicker';
import { ReactComponent as PlayIcon } from '../../../assets/icons/play.svg';

const CardWithSession = () => (


  <div className="session">
  <div className="align-middle align-items-center d-flex gap-2" style={{textAlign:"center",fontSize:"x-large"}} color="0x99999">
    Ready, set, focus!
  </div>
  <div style={{textAlign:"center",fontSize:"smaller",margin:"inherit"}}>Achieve your goals and get more done with focus sessions.</div>
  
  <QuantityPicker min={15} max={60} />

  <div style={{textAlign:"center",fontSize:"smaller",margin:"inherit"}}>You'll have no break</div>
  <div>
  <span className="icon-button"  style={{marginLeft:"170px"}}><PlayIcon></PlayIcon></span>
  Start
  </div>
  </div>
  
  
);

export default React.memo(CardWithSession);
