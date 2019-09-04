import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import q1 from './q1';
import q2 from './q2';
import q3 from './q3';
import q4 from './q4';

export default class Home extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  render() {                
    return (
      <div className="Home">
        <h2>Home</h2>
        <ul>
          <li><NavLink to="/q1">Q1</NavLink></li>
          <li><NavLink to="/q2">Q2</NavLink></li>
          <li><NavLink to="/q3">Q3</NavLink></li>
          <li><NavLink to="/q4">Q4</NavLink></li>
        </ul>
      </div>
    );
  }
}
