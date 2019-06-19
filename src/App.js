import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Content from './components/common/Content';
import Logger from './services/Logger';
import Layout from './components/common/Layout';
import Home from './components/Home';
import Post from './components/Post';
import Navigation from './components/common/Navigation';

class App extends React.Component {
  componentDidMount() {
    Logger.info('component mounted');
  }

  render() {
    return (
      <Layout>
        <Router>
          <Navigation>
            <Link to="/">Home</Link> / <Link to="/post">Post</Link>
          </Navigation>
          <Content>
            <Route path="/" exact component={Home} />
            <Route path="/post" component={Post} />
          </Content>
        </Router>
      </Layout>
    );
  }
}

export default App;
