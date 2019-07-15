import React, { Component } from 'react';
import TextInput from '../../components/TextInput/TextInput';

class TripForm extends Component {
    constructor () {
        super();

        this.state = {
            formControls: {
                tripName: {
                    value: ''
                },
                startDate: {
                    value: Date
                },
                endDate: {
                    value: Date
                },
                locationOne: {
                    value: ''
                },
                locationTwo: {
                    value: ''
                },
                locationThree: {
                    value: ''
                },
                notes: {
                    value: ''
                }

            }
        }
    }

    changeHandler = event => {

        const tripName = event.target.tripName;
        const value = event.target.value;

        this.setState({
            formControls: {
                ...this.state.formControls,
                [tripName]: {
                ...this.state.formControls[tripName],
                    value
                }
            }
        });
    }
            

    render () {
        return (
            <form>
                <label>Trip Name</label>
                <TextInput name='tripName'
                    value={this.state.formControls.tripName.value}
                    onChange={this.changeHandler}
                    />
                <br></br>
                <label>Start Date:</label>
                <input type='date'
                name='startDate'
                value={this.state.name}
                onChange={this.changeHandler}
                />
                <br></br>
                <label>End Date:</label>
                <input type='date'
                name='endDate'
                value={this.state.name}
                onChange={this.changeHandler}
                />
                <br></br>
                <label>Location One:</label>
                <input type='text'
                name='locationOne'
                value={this.state.name}
                onChange={this.changeHandler}
                />
                <br></br>
                <label>Location Two:</label>
                <input type='text'
                name='locationTwo'
                value={this.state.name}
                onChange={this.changeHandler}
                />
                <br></br>
                <label>Location Three:</label>
                <input type='text'
                name='locationThree'
                value={this.state.name}
                onChange={this.changeHandler}
                />
                <br></br>
                <label>Notes:</label>
                <textarea>
                <input type='text'
                name='notes'
                value={this.state.name}
                onChange={this.changeHandler}
                />
                </textarea>
            </form>
        );
    }
}

export default TripForm;