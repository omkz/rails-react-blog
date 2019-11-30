import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
        <Menu.Menu position='right'>
          <Menu.Item as={Link} to="/login">Login</Menu.Item>
        </Menu.Menu>
      </Menu>
      <ToastContainer autoClose={2000}/>

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/createpost' component={CreatePost} />
        <Route path='/login' component={LoginPage} />
      </Switch>

    </Router>
  );
}

export default App;
