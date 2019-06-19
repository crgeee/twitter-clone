import React from 'react';
import Logger from './services/Logger';
import Home from './components/Home/Home';
import Layout from './components/common/Layout';

class App extends React.Component {
  componentDidMount() {
    Logger.info('component mounted');
  }

  render() {
    return (
      <Layout>
        <Home />
      </Layout>
    );
  }
}

export default App;
