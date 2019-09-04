import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
import q1 from './pages/q1';
import q2 from './pages/q2';
import q3 from './pages/q3';
import q4 from './pages/q4';
import AddEvent from './pages/AddEvent';
// import Countries from './pages/Countries';
// import AddCountry from './pages/AddCountry';
// import Secret from './pages/Secret';
import Login from './pages/Login';
import Signup from './pages/Signup';
import api from '../api';
import logo from '../logo.svg';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: []
    }
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Event Helper</h1>
          <NavLink to="/" exact>Home</NavLink>
          {/* <NavLink to="/countries">Countries</NavLink> */}
          {/* <NavLink to="/add-country">Add country</NavLink> */}
          <NavLink to="/addevent"></NavLink>
          {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link>}
          {/* <NavLink to="/secret">Secret</NavLink> */}
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/q1" component={q1} />
          <Route path="/q2" component={q2} />
          <Route path="/q3" component={q3} />
          <Route path="/q4" component={q4} />
          {/* <Route path="/AddEvent" component={AddEvent} /> */}
          <Route path="/addevent" component={AddEvent} />
          {/* <Route path="/countries" component={Countries} /> */}
          {/* <Route path="/add-country" component={AddCountry} /> */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          {/* <Route path="/secret" component={Secret} /> */}
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }
}