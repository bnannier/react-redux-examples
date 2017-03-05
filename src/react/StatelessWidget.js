import React from 'react';

// Stateless Widget
const StatelessWidget = (props) => {
  return (
      <div>
        <input type="text" onChange={props.updateTxt}/><br />
        <label>{props.txt} {props.cat}</label><br /><br />
      </div>
  );
}

StatelessWidget.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

export default StatelessWidget