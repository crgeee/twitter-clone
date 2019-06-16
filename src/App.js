import React from 'react';
import ReactDOM from 'react-dom';
import Logger from './services/Logger';
import Home from './components/Home/Home';
import GlobalStyles from './components/common/GlobalStyles';

class App extends React.Component {
  componentDidMount() {
    Logger.info('component mounted');
  }

  render() {
    return (
      <div>
        <GlobalStyles />
        <Home />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
