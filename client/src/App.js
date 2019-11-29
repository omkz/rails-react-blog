import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import { Menu } from 'semantic-ui-react'
import { HomePage } from './HomePage';
import CreatePost from './components/CreatePost';
import { LoginPage } from './LoginPage';


function App() {
  return (
    <Router>
      <Menu fixed='top' inverted>
        <Menu.Item as={Link} to="/"> Home</Menu.Item>
        <Menu.Item as={Link} to="/createpost">Create Post</Menu.Item>
        <Menu.Item as={Link} to="/contact"> Contact</Menu.Item>
        <Menu.Item as={Link} to="/about"> About</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item as={Link} to="/login">Login</Menu.Item>
        </Menu.Menu>
      </Menu>

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/createpost' component={CreatePost} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
        <Route path='/login' component={LoginPage} />
      </Switch>

    </Router>
  );
}

export default App;
