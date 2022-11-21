import './index.css';

import { ReactComponent as SettingIcon } from '../../../assets/icons/setting.svg';
import { ReactComponent as ClockIcon } from '../../../assets/icons/clock.svg';
import { ReactComponent as StopwatchIcon } from '../../../assets/icons/stopwatch.svg';
import { ReactComponent as AlarmIcon } from '../../../assets/icons/alarm.svg';
import { ReactComponent as TimerIcon } from '../../../assets/icons/timer.svg';
import { ReactComponent as SesssionIcon } from '../../../assets/icons/brain.svg';
import { ReactComponent as BellIcon } from '../../../assets/icons/bell.svg';
import { ReactComponent as ChevronIcon } from '../../../assets/icons/chevron.svg';
import { ReactComponent as MenuIcon } from '../../../assets/icons/menu.svg';
import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';

function Apps() {
  return (
    <Navbar>
      
        <div className='title' >Task Manager</div>
      <NavItem icon={<MenuIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem> 
      
    </Navbar>
  );
}
function Navbar(props) {
  return (
    <nav className="navbar">
        
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }
  const onClickHandler= (props) =>
  {
    console.log(props);
    if(props.gotoPage=="main"){
        navigate(`/`);
    }
    if(props.gotoPage=="timer"){
      navigate(`timer`);
    }
    setActiveMenu(props.goToMenu)
    
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={()=>onClickHandler(props)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem
          goToMenu="main"
          gotoPage="main"
          leftIcon={<SesssionIcon></SesssionIcon>}
          >
            Focus sessions
          </DropdownItem>
          <DropdownItem
            goToMenu="main"
            gotoPage="timer"
            leftIcon={<TimerIcon />}
            // rightIcon={<ChevronIcon />}
            // goToMenu="settings"
            >
            Timer
          </DropdownItem>
          <DropdownItem
            // goToMenu="alarm"
            goToMenu="main"
            gotoPage="alarm"
            leftIcon={<AlarmIcon/>}
            rightIcon={<ChevronIcon />}
            // goToMenu="animals"
            >
            Alarm
          </DropdownItem>
          <DropdownItem
            goToMenu="main"
            gotoPage="stopwatch"
            leftIcon={<StopwatchIcon/>}
            rightIcon={<ChevronIcon />}
            // goToMenu="animals"
            >
            Stopwatch
          </DropdownItem>
          <DropdownItem
            goToMenu="main"
            gotoPage="clock"
            leftIcon={<ClockIcon/>}
            rightIcon={<ChevronIcon />}
            // goToMenu="animals"
            >
            World clock
          </DropdownItem>
          <DropdownItem
            goToMenu="main"
            gotoPage="settings"
            leftIcon={<SettingIcon/>}
            rightIcon={<ChevronIcon />}
            // goToMenu="animals"
            >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

  
    </div>
  );
}
export default Apps;
