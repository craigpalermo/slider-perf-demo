import React, {useEffect, useState, memo} from 'react'
import fibonacci from 'fibonacci'
import styled from 'styled-components'

const WorkerConfig = styled.div`
  border: 1px solid black;
  padding: 12px;
`

const LOOP_COUNT = 500
const MAX_LOOP_COUNT = 1000

function TimedWorker() {
  const [timerId, setTimerId] = useState(null)
  const [isWorking, setIsWorking] = useState(false)
  const [loopCount, setLoopCount] = useState(LOOP_COUNT)

  function toggleWorker() {
    clearInterval(timerId)
    setTimerId(null)
    setIsWorking(!isWorking)
  }

  function onLoopCountChange(event) {
    if (event.target.value <= MAX_LOOP_COUNT) {
      setLoopCount(event.target.value)
    } else {
      console.warn(`Loop count must be less than ${MAX_LOOP_COUNT}`)
    }

    // Restart worker if necessary
    if (isWorking) {
      clearInterval(timerId)
      setTimerId(null)
      resetWorkerInterval()
    }
  }

  function resetWorkerInterval() {
    const intervalId = setInterval(() => {
      console.log('Starting work...')
      let count = 0;

      while (count++ < loopCount) {
        const x = fibonacci.iterate(count)
        // console.log(x)
      }

      console.log('Finished!');
    }, 1000)

    setTimerId(intervalId)
  }

  useEffect(() => {
    console.log('effect')
    if (!timerId && isWorking) {
      resetWorkerInterval()
    }

    return () => clearInterval(timerId)
  })

  return (<WorkerConfig>
    <div>
      <span>Iterations per interval:</span>
      <input
        type={'number'}
        onChange={onLoopCountChange}
        value={loopCount}
        max={MAX_LOOP_COUNT}
      />
    </div>

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