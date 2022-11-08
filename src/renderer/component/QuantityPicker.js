import React, { Component } from 'react';
import { ReactComponent as UpIcon } from '../../../assets/icons/up.svg';
import { ReactComponent as DownIcon } from '../../../assets/icons/down.svg';
export default class QuantityPicker extends Component {

  constructor(props) {
    super(props);

    this.state = {value: this.props.min, disableDec: true, disableInc: false}
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    const plusState = this.state.value + 15;
    if (this.state.value < this.props.max){
      this.setState({value: plusState});
      this.setState({disable: false});
    }
    if (this.state.value == (this.props.max - 1)) {
      this.setState({disableInc: true});
    }
    if (this.state.value == this.props.min) {
      this.setState({disableDec: false});
    }
  }

  decrement() {
    const minusState = this.state.value - 15;
    if (this.state.value > this.props.min) {
      this.setState({value: minusState  });
      if (this.state.value == this.props.min + 1) {
        this.setState({disableDec: true});
      }
    } else {
      this.setState({value: this.props.min});
    }
    if (this.state.value == this.props.max) {
      this.setState({disableInc: false});
    }
  }

  render() {
    const { disableDec, disableInc } = this.state;

    return (
      <span className="quantity-picker">
        
        <div className="quantity-display" type="text" readOnly >{`${this.state.value} mins` }</div>
        <div>
        {/* <button className={`${disableDec ? 'mod-disable' : ''}quantity-modifier modifier-left`} onClick={this.decrement}>   <UpIcon></UpIcon></button> */}
           <span className="icon-button"  onClick={this.decrement}><UpIcon></UpIcon></span>
            <span className="icon-button"  onClick={this.increment}><DownIcon></DownIcon></span>
        {/* <button className={`${disableInc ? 'mod-disable ' : ''}quantity-modifier modifier-right`} onClick={this.increment}>&#xff0b;</button> */}
        </div>
      </span>
    );
  }
}