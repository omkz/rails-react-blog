import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import { Menu, Container} from 'semantic-ui-react'
import { HomePage } from './HomePage';


function App() {
  return (
    <Router>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as={Link} to="/" > Home</Menu.Item>
          <Menu.Item as={Link} to="/contact"> Contact</Menu.Item>
          <Menu.Item as={Link} to="/about"> About</Menu.Item>
        </Container>
      </Menu>
      
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
      </Switch>

    </Router>
  );
}

export default App;
