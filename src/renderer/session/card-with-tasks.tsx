import React,{FC,Component,useState, useEffect } from "react";
import QuantityPicker from '../component/QuantityPicker';
import  { ReactComponent as PlayIcon } from '../../../assets/icons/play.svg';
import Form from 'react-bootstrap/Form';
import  { ReactComponent as TaskIcon } from '../../../assets/icons/task.svg';

import InputGroup from 'react-bootstrap/InputGroup';


import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import Cloud from '@mui/icons-material/Cloud';

const options = [
  
  'Add Task',
  'Clear Tasks',
  // 'Callisto',

];

const ITEM_HEIGHT = 48;

function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{minHeight:"10px",paddingRight:"0px"}}
      >
        <MoreVertIcon fontSize="small" sx={{fill: "var(--text-color)"}} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

function IconMenu() {
  return (
    <Paper sx={{ width: 40, maxWidth: '100%',background:"transparent",display: "table", marginLeft: "auto" }}>
      <MenuList sx={{display: "flex",paddingTop:"0px",paddingBottom:"0px"}} >
        <MenuItem onClick={() => console.log("asdsd")} sx={{minHeight:"10px",paddingRight:"0px"}}>
          <ListItemIcon>
            <AddIcon fontSize="small" sx={{fill: "var(--text-color)"}} />
          </ListItemIcon>
          {/* <ListItemText>Cut</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography> */}
        </MenuItem>
        <MenuItem  sx={{minHeight:"10px",paddingRight:"0px"}}>
          <ListItemIcon>
            {/* <MoreVertIcon fontSize="small"  sx={{fill: "var(--text-color)"}} /> */}
             <LongMenu/>
          </ListItemIcon>
          {/* <ListItemText>Copy</ListItemText> */}
          {/* <Typography variant="body2" color="text.secondary">
            ⌘C
          </Typography> */}
        </MenuItem>
        
        {/* <Divider /> */}
      
      </MenuList>
    </Paper>
  );
}

const handl=()=>{
  console.log("here");
}


const Task: FC<{task:string,disabled:boolean  }> = ({task,disabled}) => {
  const [disableInput, setdisableInput] = useState(disabled);

  return (
   <InputGroup className="mb-3 task border1" onClick={() => setdisableInput(false)}>
        <InputGroup.Checkbox className="task-checkbox checkbox-round" aria-label="Checkbox for following text input" />
        {/* <label className="task-text">Task 1</label> */}
       {/* <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text> */}
        <Form.Control 
        autoFocus 
        type="input"
      disabled={disableInput}
     style={{color:"var(--text-color)",background:"transparent",border:"transparent"}}
          aria-label="Small"
          defaultValue={task}
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
  );
};



const CardWithTasks : FC<{ }> = ({}) =>  {
  const [tasks,setTasks]= useState([
      {task:"task 1",disableInput:true},
      {task:"task 2",disableInput:true},
      {task:"task 3",disableInput:true}
    ]);
  
  const readTasks=async() => {
    // const taskss=;
    // setTasks(taskss);

  }

  useEffect(()=>{
    readTasks();
  
  },[]);
  const addNewTask=async()=>{
  
    var a = JSON.parse(JSON.stringify( [   ...tasks,{task:"New Task",disableInput:false}]));
      setTasks(a);
  }

return (
  <div className="session" >
  
      <div style={{display:"flex",    alignItems: "center",fontSize:"x-large"}}><TaskIcon style={{margin:"3px",fill:"#484a4d"}}/>
      Tasks 
      
       <Paper sx={{ width: 40, maxWidth: '100%',background:"transparent",display: "table", marginLeft: "auto" }}>
      <MenuList sx={{display: "flex",paddingTop:"0px",paddingBottom:"0px"}} >
        <MenuItem onClick={addNewTask} sx={{minHeight:"10px",paddingRight:"0px"}}>
          <ListItemIcon>
            <AddIcon fontSize="small" sx={{fill: "var(--text-color)"}} />
          </ListItemIcon>
        </MenuItem>
        <MenuItem  sx={{minHeight:"10px",paddingRight:"0px"}}>
          <ListItemIcon>
             <LongMenu/>
          </ListItemIcon>
        </MenuItem>
      </MenuList>
    </Paper>
      </div>
      Select a task for focus session
    <div id="task-list" className="#style-8">
      {
       tasks.map((element, index) => {
          return (
            <Task key={index} task={element.task} disabled={element.disableInput}/>
          )
        })
      }

    
    </div>
    
      
  
  </div>
)
        };


export default CardWithTasks;
// React.memo(CardWithTasks);
