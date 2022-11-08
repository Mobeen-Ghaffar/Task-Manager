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
import { CSSTransition } from 'react-transition-group';

function Apps() {
  return (
    <Navbar>
      {/* <NavItem icon={<PlusIcon />} /> */}
      {/* <NavItem icon={<BellIcon />} />
       <NavItem icon={<MessengerIcon />} /> */}
        <div className='title' >Clock Application</div>
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
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
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
          leftIcon={<SesssionIcon></SesssionIcon>}
          >Focus sessions</DropdownItem>
          <DropdownItem
            leftIcon={<TimerIcon />}
            rightIcon={<ChevronIcon />}
            // goToMenu="settings"
            >
            Timer
          </DropdownItem>
          <DropdownItem
            leftIcon={<AlarmIcon/>}
            rightIcon={<ChevronIcon />}
            // goToMenu="animals"
            >
            Alarm
          </DropdownItem>
          <DropdownItem
            leftIcon={<StopwatchIcon/>}
            rightIcon={<ChevronIcon />}
            // goToMenu="animals"
            >
            Stopwatch
          </DropdownItem>
          <DropdownItem
            leftIcon={<ClockIcon/>}
            rightIcon={<ChevronIcon />}
            // goToMenu="animals"
            >
            World clock
          </DropdownItem>

          <DropdownItem
            leftIcon={<SettingIcon/>}
            rightIcon={<ChevronIcon />}
            // goToMenu="animals"
            >
            Settings
          </DropdownItem>

        </div>
      </CSSTransition>

      {/* <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition> */}

      {/* <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition> */}
    </div>
  );
}
export default Apps;
