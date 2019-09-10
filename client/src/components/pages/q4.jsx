import React, { Component } from 'react'
// import AddEvent from "./AddEvent";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import api from '../../api';

const events = [{
  _id:"",
  eventName:"",
  siteLead:"",
  city:"",
  tse:"",
  actualSpend:"",
  quarter:""
}];

const fakeRequest = () =>
  new Promise(resolve => setTimeout(() => resolve(events), 1000));

export class q4 extends Component {
  constructor(props) {
    super(props)
    this.state ={
      events: [{}]
    }
  }

  componentDidMount(){
    fakeRequest().then(events => this.setState({events}))
  }

  render(){
    const events = this.state.events.map(event => (
      <div key={event._id}>
        <h2>Event Name: {event.eventName}</h2>
        <p>Site Lead: {event.siteLead}</p>
        <p>City: {event.city}</p>
        <p>Total Spend Estimate: {event.tse}</p>
        <p>Actual Spend: {event.actualSpend}</p>
        <p>Quarter: {event.quarter}</p>

      </div>
    ))
    return(
      <div className="Events">
        <div className="quarterNum">
          <h1>Quarter 4</h1>
        </div>
        <div className="AddEvents">
          <NavLink to="/AddEvent">Add an Event</NavLink>
        </div>
        <div className="currentBud">
          <h2>Budget</h2>
        </div>
        <h2>List of events</h2>
        {/* {this.state.events.map(d => <li key={d._id}>{d.eventName}{d.siteLead}{d.city}{d.tse}{d.actualSpend}</li>)} */}
        {events}
      </div>
    );
  }
// componentDidMount() {
//   api.getEvents()
//     .then(events => {
//       console.log(events)
//       this.setState({
//         events: events
//       })
//     })
//     .catch(err => console.log(err))
    
// }

}








////////////////////////////////////////
  // render() {
  //   return (
  //     <div>
  //     <div className="quarterNum">
  //       <h1>Quarter 4</h1>
  //     </div>
  //     <div className="AddEvents">
  //       <NavLink to="/AddEvent">Add an Event</NavLink>
  //     </div>
  //     <div className="currentBud"><h2>Budget</h2></div>
  //       <div className="container-fluid">
  //         <div className="row">
  //           <div className="col-md-12">
  //             <div className="row">

  //               <div className="col-md-2">
  //                 <header><b>Site Lead</b></header>
  //                 <ol>
  //                   <li>Anthony Ramirez, David Kwon</li>
  //                   <li>Phillip Grasso Nguyen, Mila Erlykova</li>
  //                   <li>Sergio Pereira</li>
  //                   <li>Stephen Ryan</li>
  //                   <li>Tim Coble</li>
  //                   <li>Venus Lattore</li>
  //                   <li>Joe Provo</li>
  //                   <li>Gonzalo Palacios</li>
  //                   <li>Maricarmens Suarez</li>
  //                   <li>Jon Simpson</li>
  //                   <li>Anthony Prasad</li>
  //                   <li>Kasi Visswanathan</li>
  //                 </ol>
  //               </div>

  //               <div className="col-md-2">
  //                 <header><b>Event</b></header>
  //                 <ol>
  //                   <li>N/A</li>
  //                   <li>N/A</li>
  //                   <li>N/A</li>
  //                   <li>N/A</li>
  //                   <li>N/A</li>
  //                   <li>N/A</li>
  //                   <li>N/A</li>
  //                   <li>N/A</li>
  //                   <li>N/A</li>
  //                   <li>N/A</li>
  //                   <li>N/A</li>
  //                   <li>N/A</li>
  //                 </ol>
  //               </div>

  //               <div className="col-md-2">
  //                 <header><b>Total Spend Estimate</b></header>
  //                 <ol>
  //                   <li>$0.00</li>
  //                   <li>$0.00</li>
  //                   <li>$0.00</li>
  //                   <li>$0.00</li>
  //                   <li>$0.00</li>
  //                   <li>$0.00</li>
  //                   <li>$0.00</li>
  //                   <li>$0.00</li>
  //                   <li>$0.00</li>
  //                   <li>$0.00</li>
  //                   <li>$0.00</li>
  //                   <li>$0.00</li>
  //                 </ol>
  //               </div>

  //               <div className="col-md-2">
  //                 <header><b>Actual Spend</b></header>
  //                 <ol>
  //                   <li>$0.00</li>
  //                   <li>$0.00</li>
  //                   <li>$0.00</li>
  //                   <li>$0.00</li>
  //                   <li>$0.00</li>
  //                   <li>$0.00</li>
  //                   <li>$0.00</li>
  //                   <li>$0.00</li>
  //                   <li>$0.00</li>
  //                   <li>$0.00</li>
  //                   <li>$0.00</li>
  //                   <li>$0.00</li>
  //                 </ol>
  //               </div>
                
  //               <div className="col-md-2">
  //                 <header><b>Created By</b></header>
  //                 <ol>
  //                   <li>--</li>
  //                   <li>--</li>
  //                   <li>--</li>
  //                   <li>--</li>
  //                   <li>--</li>
  //                   <li>--</li>
  //                   <li>--</li>
  //                   <li>--</li>
  //                   <li>--</li>
  //                   <li>--</li>
  //                   <li>--</li>
  //                   <li>--</li>
  //                 </ol>
  //               </div>
                
  //               <div className="col-md-2">
  //                 <header><b>Site Lead Confirms</b></header>
  //                 <ol>
  //                   <li></li>
  //                   <li></li>
  //                   <li></li>
  //                   <li></li>
  //                   <li></li>
  //                   <li></li>
  //                   <li></li>
  //                   <li></li>
  //                   <li></li>
  //                   <li></li>
  //                   <li></li>
  //                   <li></li>
  //                 </ol>
  //               </div>


  //             </div>
  //           </div>
  //         </div>
      //   </div>
      // </div>
//     )
//   }
// }


export default q4
