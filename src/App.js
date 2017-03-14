import React from 'react';

import Home from './components/Home';
import Chat from './components/Chat';

import {
  Router,
  Scence,
} from 'react-native-router-flux'

import {
  Platform
} from 'react-native';

class App extends React.Component{
  render () {
    return (
      <Router>
        <Scence key='root' style={{paddingTop: Platform.OS === 'ios' ? 64 : 54}}>
          <Scence key='home' component={Home} title='Home'/>
          <Scence key='chat' component={Chat} title='Chat'/>
        </Scence>
      </Router>
    );
  }
}

export default App;
