import React from 'react'
import PropTypes from 'prop-types'

export default function ConfigDial(props) {
  const {max, onChange, value, label, min} = props

  return (<div>
    <span>{label} ({min} - {max})</span>
    < input
      type={'number'}
      onChange={onChange}
      value={value}
      max={max}
    />
  </div>);
}

ConfigDial.defaultProps = {
  max: 10,
  min: 1,
  value: 5,
};

ConfigDial.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func,
  value: PropTypes.number,
  lable: PropTypes.string,
}