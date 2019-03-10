import React, {useState} from 'react'
import Slider from 'rc-slider'

import 'rc-slider/assets/index.css'

const sliderDefault = 50;

export default function CustomSlider() {
  const [sliderVal, setSliderVal] = useState(sliderDefault)

  return (<div>
    <h2>Slider value: {sliderVal}</h2>
    <Slider
      onChange={setSliderVal}
      defaultValue={sliderDefault}
    />
  </div>)
}