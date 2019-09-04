import React, { Component } from 'react';
import api from '../../api';
// import link from "react-router-dom";
export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      name: "",
      city: "",
      numOfFTE: Number,
      sATB: Number,
      aBB: Number,
      password: "",
      message: null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick(e) {
    e.preventDefault()
    let data = {
      username: this.state.username,
      name: this.state.name,
      city: this.state.city,
      numOfFTE: this.state.numOfFTE,
      sATB: this.state.sATB,
      aBB:this.state.aBB,
      password: this.state.password,
    }
    api.signup(data)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/") // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    return (
      <div className="Signup">
        <h2>Signup</h2>
        <form>
          Username: <input type="text" value={this.state.username} name="username" onChange={this.handleInputChange} /> <br />
          Name: <input type="text" value={this.state.name} name="name" onChange={this.handleInputChange} /> <br />
          City: <input type="text" value={this.state.city} name="city" onChange={this.handleInputChange} /> <br />
          Number of FTE: <input type="number" value={this.state.numOfFTE} name="numOfFTE" onChange={this.handleInputChange} /> <br />
          Site Annual Total Budget: <input type="number" value={this.state.sATB} name="sATB" onChange={this.handleInputChange} /> <br />
          Annual Budget Balance: <input type="number" value={this.state.aBB} name="aBB" onChange={this.handleInputChange} /> <br />

          Password: <input type="password" value={this.state.password} name="password" onChange={this.handleInputChange} /> <br />
          <button onClick={(e) => this.handleClick(e)}>Signup</button>
        </form>
        {this.state.message && <div className="info info-danger">
          {this.state.message}
        </div>}
      </div>
    );
  }
}