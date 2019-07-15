import React, { Component } from 'react';
import TripForm from '../../components/TripForm/TripForm';

export class CreatePage extends Component {
    render() {
        return (
            <div>
                <h2>Create a trip</h2>
                <TripForm />
            </div>
        )
    }
}

export default CreatePage;
