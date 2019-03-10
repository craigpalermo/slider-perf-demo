import React from 'react'
import PropTypes from 'prop-types'
import {Box, Flex, Text, Input} from 'pcln-design-system'

export default function ConfigDial(props) {
  const {max, onChange, value, label, min} = props

  return (<Flex
    align={'center'}
    m={2}
  >
    <Box>
      <Text mr={2}>{label} ({min} - {max})</Text>
    </Box>
    <Box>
      <Input
        type={'number'}
        onChange={onChange}
        value={value}
        max={max}
      /></Box>
  </Flex>);
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