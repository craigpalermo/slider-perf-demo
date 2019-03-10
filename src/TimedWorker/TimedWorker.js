import React, {useEffect, useState, memo} from 'react'

import fibonacci from 'fibonacci'
import styled from 'styled-components'

import ConfigDial from '../ConfigDial'

const WorkerConfig = styled.div`
  border: 1px solid black;
  padding: 12px;
`

const LOOP_MULTIPLYER = 100
const MAX_FREQUENCY = 10

function TimedWorker() {
  const [timerId, setTimerId] = useState(null)
  const [isWorking, setIsWorking] = useState(false)
  const [loopCount, setLoopCount] = useState(5)
  const [frequency, setFrequency] = useState(5)

  function toggleWorker() {
    clearInterval(timerId)
    setTimerId(null)
    setIsWorking(!isWorking)
  }

  function resetWorker() {
    if (isWorking) {
      clearInterval(timerId)
      setTimerId(null)
      setTimerId(getNewInterval())
    }
  }

  function onLoopCountChange(event) {
    setLoopCount(parseInt(event.target.value))
  }

  function onFrequencyChange(event) {
    setFrequency(parseInt(event.target.value))
  }

  function getNewInterval() {
    const ms = 100 * (MAX_FREQUENCY - frequency + 1);
    console.log(`Worker now set to ${ms}ms`)

    return setInterval(() => {
      console.log('Starting work...')
      let count = 0;

      while (count++ < (loopCount * LOOP_MULTIPLYER)) {
        fibonacci.iterate(count)
      }

      console.log('Finished!');
    }, ms)
  }

  useEffect(() => {
    if (isWorking) {
      resetWorker()
    }

    return () => clearInterval(timerId)
  }, [isWorking, frequency, loopCount])

  return (<WorkerConfig>
    <ConfigDial
      onChange={onLoopCountChange}
      value={loopCount}
      label={'Intensity'}
    />
    <ConfigDial
      onChange={onFrequencyChange}
      value={frequency}
      label={'Frequency'}
      max={MAX_FREQUENCY}
    />

    <div>
      Worker status:
      <button
        onClick={toggleWorker}
      >{isWorking ? 'ON' : 'OFF'}
      </button>
    </div>
  </WorkerConfig>);
}

export default memo(TimedWorker)