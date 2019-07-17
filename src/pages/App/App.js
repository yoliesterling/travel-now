import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import tokenService from '../../utils/tokenService';

import CreateTrip from "../../components/CreateTrip/CreateTrip";
import EditTrip from "../../components/EditTrip/EditTrip";
import TripList from "../../components/TripList/TripList";
import { BrowserRouter as Router } from 'react-router-dom';



class App extends Component {
  constructor() {
    super();
    this.state={
      // Initialize user if there's a token, otherwise null
      user: userService.getUser()
    };
  }

  
  /*--- Callback Methods ---*/

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  /*--- Lifecycle Methods ---*/


  render() {
    return (
      <div>
        <header className='header-footer'></header>
        <NavBar handleLogout={ this.handleLogout } />
        <Switch>
          <Route exact path='/' render={() =>
            <MainPage
              handleLogout={this.handleLogout}
              user={this.state.user}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
    <Router>
      <div className="container">
      <br/>
      <Route path="/" exact component={TripList} />
      <Route path="/edit/:id" component={EditTrip} />
      <Route path="/create" component={CreateTrip} />
      </div>
    </Router>
  );
}

            :
              <Redirect to='/login'/>
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
