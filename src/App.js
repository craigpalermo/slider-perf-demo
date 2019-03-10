import React, {Component} from 'react';
import styled from 'styled-components';
import {ThemeProvider, Flex, Box} from 'pcln-design-system'

import CustomSlider from './CustomSlider'
import TimedWorker from './TimedWorker'
import Readme from './Readme'

const Container = styled(Flex)`
  max-width: 680px;
`;

const Demo = styled(Box)`
  border-radius: 10px;
  margin-top: 24px;
  padding: 24px;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider>
          <Container
            flexDirection={'column'}
            m={4}
          >
            <Readme/>
            <Demo bg={'lightGray'}>
              <TimedWorker/>
              <CustomSlider/>
            </Demo>
          </Container>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
