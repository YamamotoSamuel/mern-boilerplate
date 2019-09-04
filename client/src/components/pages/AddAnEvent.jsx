import React, { Component } from 'react';
import api from '../../api';

export default class AddAnEvent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Event: []
    }
  }
  render() {
    return (
      <div className="Countries">
        <h2>List of countries</h2>
        {this.state.countries.map(c => <li key={c._id}>{c.name}</li>)}
      </div>
    );
  }
  componentDidMount() {
    api.getCountries()
      .then(countries => {
        console.log(countries)
        this.setState({
          countries: countries
        })
      })
      .catch(err => console.log(err))
  }
}