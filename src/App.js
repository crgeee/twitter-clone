import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Content from './components/common/Content';
import Logger from './services/Logger';
import Layout from './components/common/Layout';
import Home from './components/Home';
import Post from './components/Post';
import Navigation from './components/common/Navigation';

class App extends React.Component {
  componentDidMount() {
    Logger.info('App mounted');
  }

  render() {
    return (
      <Layout>
        <BrowserRouter>
          <Content>
            <Navigation>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/post">Post</NavLink>
            </Navigation>

            <Route
              path="/"
              exact
              render={props => <Home {...props} title="Tweeter" />}
            />
            <Route
              path="/post"
              render={props => (
                <Post {...props} title="Make a post -- Tweeter" />
              )}
            />
          </Content>
        </BrowserRouter>
      </Layout>
    );
  }
}

export default App;
