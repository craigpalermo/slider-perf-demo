import React, {useState} from 'react'
import Slider from 'rc-slider'

import 'rc-slider/assets/index.css'

const sliderDefault = 50;

export default function CustomSlider() {
  const [sliderVal, setSliderVal] = useState(sliderDefault)
  const handleStyle = {
    height: '24px',
    width: '24px',
    marginTop: '-11px',
    marginLeft: '-11px',
  }

  return (<div>
    <h3>Slider value: {sliderVal}</h3>
    <Slider
      onChange={setSliderVal}
      defaultValue={sliderDefault}
      handleStyle={[handleStyle]}
    />
  </div>)
}