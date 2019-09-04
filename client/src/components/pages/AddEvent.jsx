import React, { Component } from 'react'
import api from '../../api';
// import { Mongoose } from 'mongoose';
export default class AddEvent extends Component {
   constructor(props) {
      super(props)
        this.state={
        eventName: "",
        siteLead: "",
        city: "",
        tse: Number,
        actualSpend: Number,
        quarter: Number
        // creator:{
        //   type: {type:Mongoose.Schema.Types.ObjectId, ref: "User"}
        // } 
      }
  this.handleInputChange = this.handleInputChange.bind(this)
}

  handleInputChange(thing) {
    this.setState({
      [thing.target.name]: thing.target.value
    })
  }

  handleClick(e) {
    e.preventDefault()
    let data = {
      eventName: this.state.eventName,
      siteLead: this.state.siteLead,
      city: this.state.city,
      tse: this.state.tse,
      actualSpend: this.state.actualSpend,
      quarter: this.state.quarter
      // creator:this.state.creator,
    }
    api.addEvent(data)
      .then(result => {
        console.log('SUCCESS')
        // this.props.history.push("/..")
        this.props.history.goBack();
      })
      .catch(err => this.setState({ message: err.toString()}))
  }

  render() {
    return (
      <div className="AddEvent">
        <h2>Add New Event</h2>
        <form>
          Event Name: <input type="text" value={this.state.eventName} name="eventName" onChange={this.handleInputChange}/> <br />
          Site-Lead: <input type="text" value={this.state.siteLead} name="siteLead" onChange={this.handleInputChange}/> <br />
          City: <input type="text" value={this.state.city} name="city" onChange={this.handleInputChange}/> <br />
          Total Spend Estimate: <input type="number" value={this.state.tse} name="tse" onChange={this.handleInputChange}/> <br />
          Actual Spend: <input type="number" value={this.state.actualSpend} name="actualSpend" onChange={this.handleInputChange}/> <br />
          Quarter: <input type="number" value={this.state.quarter} name="quarter" onChange={this.handleInputChange}/> <br />
          <button onClick={(z)  => this.handleClick(z)}>Add Event</button>
        </form>
      </div>
    )
  }
}

