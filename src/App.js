import React, {Component} from 'react';
import styled from 'styled-components';

import CustomSlider from './CustomSlider'
import TimedWorker from './TimedWorker'

const Container = styled.div`
  margin: 40px;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <h1>UX Perf with Background CPU Task</h1>
          <TimedWorker/>
          <CustomSlider/>

          <h3>What is this?</h3>
          <p>This application demonstrates the effect of background CPU tasks on UX in
          JavaScript's single-threaded environment. Background work is simulated by computing
          Fibonacci numbers from 0 to n, for n iterations. Framerate while dragging the slider
          should degrade as n increases. Turn the background worker on/off and adjust its parameters
          using the controls above.</p>

          <p>This demo uses <a href={'https://www.npmjs.com/package/rc-slider'}>rc-slider</a> with default settings,
          and does not perform any action on change.</p>
        </Container>
      </div>
    );
  }
}

export default App;
