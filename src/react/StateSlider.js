import React from 'react';

// State Slider
class StateSlider extends React.Component {
  render() {
    let label = this.props.label !== '' ?
        <label>{this.props.label} - {this.props.val}</label> : ''
    return (
        <div>
          <input ref="inp"
                 type={this.props.type}
                 min={this.props.min}
                 max={this.props.max}
                 step={this.props.step}
                 defaultValue={this.props.defaultVal}
                 onChange={this.props.updateSlider}/>
          {label}
        </div>
    );
  }
}

StateSlider.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string,
  updateSlider: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['number', 'range'])
}

StateSlider.defaultProps = {
  min: 0,
  max: 0,
  step: 1,
  defaultVal: 0,
  label: '',
  type: 'range'
}

export default StateSlider