import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Trip = props => (
  <tr>
    <td>{props.trip.tripname}</td>
    <td>{props.trip.description}</td>
    <td>{props.trip.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.trip._id}>edit</Link> | <button onClick={() => { props.deleteTrip(props.trip._id) }}>delete</button>
    </td>
  </tr>
)

export default class TripsList extends Component {
  constructor(props) {
    super(props);

    this.deleteTrip = this.deleteTrip.bind(this)

    this.state = {trips: []};
  }

  componentDidMount() {
    axios.get('http://localhost:3001/trips/')
      .then(response => {
        this.setState({ trips: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteTrip(id) {
    axios.delete('http://localhost:3001/trips/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      trips: this.state.trips.filter(el => el._id !== id)
    })
  }

  tripList() {
    return this.state.trips.map(currenttrip => {
      return <Trip trip={currenttrip} deleteTrip={this.deleteTrip} key={currenttrip._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Planned Trips</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Trip Name</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            { this.tripList() }
          </tbody>
        </table>
      </div>
    )
  }
}