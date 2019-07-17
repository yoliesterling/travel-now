import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

export default class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeTripname = this.onChangeTripname.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      tripname: '',
      description: '',
      date: new Date(),
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/trips/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          tripname: response.data.tripname,
          description: response.data.description,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:3001/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeTripname(e) {
    this.setState({
      tripname: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
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

    axios.post('http://localhost:3001/trips/update/' + this.props.match.params.id, trip)
      .then(res => console.log(res.data));

  }

  render() {
    return (
    <div>
      <h3>Edit Trip Details</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Trip Name: </label>
          <input type="text"
              required
              className="form-control"
              value={this.state.tripname}
              onChange={this.onChangeTripname}
              />
              </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
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
          <input type="submit" value="Edit Trip Details" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}