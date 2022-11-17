import React, { Component } from 'react';
import FolkMe from '../component/Folkme';
import Settings from '../component/Settings';
import Times from '../component/Times';
import Controller from '../component/Controller';
import './App.css';
// import BeepSound   from '../../../assets/BeepSound.wav'

// import   BeepSound from '../../../assets/BeepSound.wav';
// import  { ReactComponent as PlayIcon } from '../../../assets/icons/play.svg'; 
// import player from 'play-sound'
// import path from 'path'; 
// const __dirname = path.resolve();

// const filePath = "";
// sound.play(filePath);


export default class Timer extends Component {
  
  constructor(props) {
    super(props);
  this.audioBeep = React.createRef();
    this.audioBeep1 = new Audio("http://www.peter-weinberg.com/files/1014/8073/6015/BeepSound.wav");
  var defaultBreakLength=10;
  var defaultSessionLength=10;
    this.state = {
      playAudio:false,
      breakLength: Number.parseInt(defaultBreakLength, 10),
      sessionLength: Number.parseInt(defaultSessionLength, 10),
      timeLabel: 'Focus Session',
      timeLeftInSecond: Number.parseInt(defaultSessionLength, 10) * 60,
      isStart: false,
      timerInterval: null
    }

    this.onIncreaseBreak = this.onIncreaseBreak.bind(this);
    this.onDecreaseBreak = this.onDecreaseBreak.bind(this);
    this.onIncreaseSession = this.onIncreaseSession.bind(this);
    this.onDecreaseSession = this.onDecreaseSession.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onStartStop = this.onStartStop.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
    this.phaseControl = this.phaseControl.bind(this);
  }

  onIncreaseBreak() {
    if (this.state.breakLength < 60 && !this.state.isStart) {
      this.setState({
        breakLength: this.state.breakLength + 2
      });
    }
  }

  onDecreaseBreak() {
    if (this.state.breakLength > 1 && !this.state.isStart) {
      this.setState({
        breakLength: this.state.breakLength - 2
      });
    }
  }

  onIncreaseSession() {
    if (this.state.sessionLength < 60 && !this.state.isStart) {
      this.setState({
        sessionLength: this.state.sessionLength + 1,
        timeLeftInSecond: (this.state.sessionLength + 1) * 60
      });
    }
  }

  onDecreaseSession() {
    if (this.state.sessionLength > 1 && !this.state.isStart) {
      this.setState({
        sessionLength: this.state.sessionLength - 1,
        timeLeftInSecond: (this.state.sessionLength - 1) * 60
      });
    }
  }

  onReset() {
    var defaultBreakLength=10;
    var defaultSessionLength=10;
    this.setState({
      breakLength: Number.parseInt(defaultBreakLength, 10),
      sessionLength: Number.parseInt(defaultSessionLength, 10),
      timeLabel: 'Session',
      timeLeftInSecond: Number.parseInt(defaultSessionLength, 10) * 60,
      isStart: false,
      timerInterval: null
    });

    this.audioBeep1.pause();
    this.audioBeep1.currentTime = 0;
    this.state.timerInterval && clearInterval(this.state.timerInterval);
  }

  onStartStop() {
    if (!this.state.isStart) {
      this.setState({
        isStart: !this.state.isStart,
        timerInterval: setInterval(() => {
          this.decreaseTimer();
          this.phaseControl();
        }, 1000)
      })
    } else {
      this.audioBeep1.pause();
      this.audioBeep1.currentTime = 0;
      this.state.timerInterval && clearInterval(this.state.timerInterval);

      this.setState({
        isStart: !this.state.isStart,
        timerInterval: null
      });
    }
  }

  decreaseTimer() {
    this.setState({
      timeLeftInSecond: this.state.timeLeftInSecond - 1
    });
  }

  phaseControl() {
    console.log(this.state.timeLeftInSecond );
    if (this.state.timeLeftInSecond === 0) {
      this.audioBeep1.play();
    } else if (this.state.timeLeftInSecond === -1) {
      if (this.state.timeLabel === 'Session') {
        this.setState({
          timeLabel: 'Break',
          timeLeftInSecond: this.state.breakLength * 60
        });
      } else {
        this.setState({
          timeLabel: 'Session',
          timeLeftInSecond: this.state.sessionLength * 60
        });
      }
    }
  }

  render() {
    return (
      <div className="pomodoro-clock">
        {/* <div className="pomodoro-clock-header">
          <h1 className="pomodoro-clock-header-name">pomodoro clock</h1>
        </div> */}

        <Settings
          breakLength={this.state.breakLength}
          sessionLength={this.state.sessionLength}
          isStart={this.state.isStart}
          onDecreaseBreak={this.onDecreaseBreak}
          onDecreaseSession={this.onDecreaseSession}
          onIncreaseBreak={this.onIncreaseBreak}
          onIncreaseSession={this.onIncreaseSession}
        />

        <Times
          timeLabel={this.state.timeLabel}
          timeLeftInSecond={this.state.timeLeftInSecond}
        />

        <Controller
          onReset={this.onReset}
          onStartStop={this.onStartStop}
          isStart={this.state.isStart}
        />

        {/* <audio id="beep" preload="auto" src="https://goo.gl/65cBl1" ref={this.audioBeep}></audio> */}
        
        {/* <FolkMe
          targetURL={this.props.githubURL}
          color="#4c4d4e"
          backgroundColor="#fff"
          position="right"
          size="120px"
          ariaLabel="View source on Github"
        /> */}
      </div>
    );
  }
}
