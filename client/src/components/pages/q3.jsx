import React, { Component } from 'react'
import AddEvent from "./AddEvent";
import { Route, Link, NavLink, Switch } from "react-router-dom";

export class q3 extends Component {

  render() {
    return (
      <div>
      <div className="quarterNum">
        <h1>Quarter 3</h1>
      </div>
      <div className="AddEvents">
        <NavLink to="/AddEvent">Add an Event</NavLink>
      </div>
      <div className="currentBud"><h2>Budget</h2></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="row">

                <div className="col-md-2">
                  <header><b>Site Lead</b></header>
                  <ol>
                    <li>Anthony Ramirez, David Kwon</li>
                    <li>Phillip Grasso Nguyen, Mila Erlykova</li>
                    <li>Sergio Pereira</li>
                    <li>Stephen Ryan</li>
                    <li>Tim Coble</li>
                    <li>Venus Lattore</li>
                    <li>Joe Provo</li>
                    <li>Gonzalo Palacios</li>
                    <li>Maricarmens Suarez</li>
                    <li>Jon Simpson</li>
                    <li>Anthony Prasad</li>
                    <li>Kasi Visswanathan</li>
                  </ol>
                </div>

                <div className="col-md-2">
                  <header><b>Event</b></header>
                  <ol>
                    <li>N/A</li>
                    <li>N/A</li>
                    <li>N/A</li>
                    <li>N/A</li>
                    <li>N/A</li>
                    <li>N/A</li>
                    <li>N/A</li>
                    <li>N/A</li>
                    <li>N/A</li>
                    <li>N/A</li>
                    <li>N/A</li>
                    <li>N/A</li>
                  </ol>
                </div>

                <div className="col-md-2">
                  <header><b>Total Spend Estimate</b></header>
                  <ol>
                    <li>$0.00</li>
                    <li>$0.00</li>
                    <li>$0.00</li>
                    <li>$0.00</li>
                    <li>$0.00</li>
                    <li>$0.00</li>
                    <li>$0.00</li>
                    <li>$0.00</li>
                    <li>$0.00</li>
                    <li>$0.00</li>
                    <li>$0.00</li>
                    <li>$0.00</li>
                  </ol>
                </div>

                <div className="col-md-2">
                  <header><b>Actual Spend</b></header>
                  <ol>
                    <li>$0.00</li>
                    <li>$0.00</li>
                    <li>$0.00</li>
                    <li>$0.00</li>
                    <li>$0.00</li>
                    <li>$0.00</li>
                    <li>$0.00</li>
                    <li>$0.00</li>
                    <li>$0.00</li>
                    <li>$0.00</li>
                    <li>$0.00</li>
                    <li>$0.00</li>
                  </ol>
                </div>
                
                <div className="col-md-2">
                  <header><b>Created By</b></header>
                  <ol>
                    <li>--</li>
                    <li>--</li>
                    <li>--</li>
                    <li>--</li>
                    <li>--</li>
                    <li>--</li>
                    <li>--</li>
                    <li>--</li>
                    <li>--</li>
                    <li>--</li>
                    <li>--</li>
                    <li>--</li>
                  </ol>
                </div>
                
                <div className="col-md-2">
                  <header><b>Site Lead Confirms</b></header>
                  <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ol>
                </div>


              </div>
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/AddEvent" component={AddEvent} />
        </Switch>
      </div>
    )
  }
}

export default q3
