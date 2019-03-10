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
        </Container>
      </div>
    );
  }
}

export default App;
