import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faComment } from '@fortawesome/free-solid-svg-icons';
import Content from './components/common/Content';
import Logger from './services/Logger';
import Layout from './components/common/Layout';
import Home from './components/Home';
import Post from './components/Post';
import Navigation from './components/common/Navigation';
import Error from './components/common/Error';

class App extends React.Component {
  componentDidMount() {
    Logger.info('App mounted');
  }

  componentDidCatch() {
    // TODO handle better
    return <Error>An error occurred.</Error>;
  }

  render() {
    const title = `tweeter`;
    const getTitle = pageTitle => `${pageTitle} - ${title}`;
    return (
      <Layout>
        <BrowserRouter>
          <Content>
            <Navigation>
              <NavLink to="/" name="home">
                <FontAwesomeIcon icon={faHome} />
                Home
              </NavLink>
              <NavLink to="/post" name="post">
                <FontAwesomeIcon icon={faComment} />
                Post
              </NavLink>
            </Navigation>

            <Route
              path="/"
              exact
              render={props => <Home {...props} pageTitle={title} />}
            />
            <Route
              path="/post"
              render={props => (
                <Post {...props} pageTitle={getTitle('Make a post')} />
              )}
            />
          </Content>
        </BrowserRouter>
      </Layout>
    );
  }
}

export default App;
