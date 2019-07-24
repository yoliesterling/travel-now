import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class CreateTrip extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      tripname: '',
      description: '',
      date: new Date(),
    }
  }
  
 onChange(e) {
   this.setState({[e.target.name]: e.target.value});
 }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const trip = {
      tripname: this.state.tripname,
      description: this.state.description,
      date: this.state.date
    }

    console.log(trip);

    axios.post('http://localhost:3001/trips/add', trip)
      .then(res => console.log(res.data));
  }

  render() {
    return (
    <div>
      <h3>Create New Trip</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Trip Name:</label>
          <input type='text' 
                name="tripname"
                required
                className='form-control'
                value={this.state.trip}
                onChange={this.onChange}
          />
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              name="description"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChange}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create New Trip" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}





