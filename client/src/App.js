import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AllPosts from "./components/AllPosts";
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to={'/'} className="nav-link"> Home </Link></li>
          <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
          <li><Link to={'/about'} className="nav-link">About</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/' component={AllPosts} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
      </Switch>

    </Router>
  );
}

export default App;
