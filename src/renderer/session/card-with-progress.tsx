import React,{FC,Component } from "react";
import QuantityPicker from '../component/QuantityPicker';
import  { ReactComponent as PlayIcon } from '../../../assets/icons/play.svg';
import Form from 'react-bootstrap/Form';
import  { ReactComponent as ProgressIcon } from '../../../assets/icons/progress.svg';

import InputGroup from 'react-bootstrap/InputGroup';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

  const handl=()=>{
    console.log("here");
  }


const Task: FC<{  }> = ({ }) => {
  return (
   <InputGroup className="mb-3 task border1">
        <InputGroup.Checkbox className="task-checkbox checkbox-round" aria-label="Checkbox for following text input" />
        <label className="task-text">Task 2</label>
        
      </InputGroup>
  );
};
const textCard:FC<{}>=({})=>{
  return(
    <div></div>
  )
}

const CardWithProgress = () => (


  <div className="session" >
  
    <div style={{display:"flex",    alignItems: "center",fontSize:"x-large"}}><ProgressIcon style={{width: "28px",height: "28px",marginRight: "3px",marginLeft: "3px",marginBottom: "8px",fill:"#484a4d"}}/>
    Progress 
    </div>
     
      <div className="progress_session">
        <CircularProgressbarWithChildren value={66}  styles={
          {
            // Customize the root svg element
            root: {},
            // Customize the path, i.e. the "completed progress"
            path: {
              // Path color
              stroke: `rgb(72, 74, 77)`,
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'butt',
              // Customize transition animation
              transition: 'stroke-dashoffset 0.5s ease 0s',
              // Rotate the path
              transform: 'rotate(0.25turn)',
              transformOrigin: 'center center',
            },
            // Customize the circle behind the path, i.e. the "total progress"
          
            trail: {
              // Trail color
              stroke: '#d6d6d6',
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'butt',
              // Rotate the trail
              transform: 'rotate(0.25turn)',
              transformOrigin: 'center center',
            },
            // Customize the text
            text: {
              // Text color
              fill: "black",
              // Text size
              fontSize: '16px',
            },
            // Customize background - only used when the `background` prop is true
            background: {
              fill: '#3e98c7',
            }
        }}>
    {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
    
    <div style={{ fontSize: 12, marginTop: -5 }}>
      <strong style={{margin: "12px"}}> Daily Goal</strong><br/>
      <strong>Completed 66%</strong>
    </div>
        </CircularProgressbarWithChildren>
      </div>
  </div>
  
);

export default React.memo(CardWithProgress);
