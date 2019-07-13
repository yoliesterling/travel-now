import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import SignupPage from '../SignupPage/SignupPage';
import SettingsPage from '../SettingsPage/SettingsPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import CreatePage from '../CreatePage/CreatePage';
import EditPage from '../EditPage/EditPage';
import Dashboard from '../Dashboard/Dashboard';
import NavBar from '../../components/NavBar/NavBar';
import TripDetails from '../TripDetails/TripDetails';
// import tokenService from '../../utils/tokenService';



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
        <NavBar />
        <Switch>
          <Route exact path='/' render={() =>
            <MainPage
              handleLogout={this.handleLogout}
              user={this.state.user}
            />
          }/>
          <Route exact path='/settings' render={props => 
            <SettingsPage
              {...props} 
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
          <Route exact path='/create' render={props => 
            <CreatePage
              {...props} 
            />
          }/>
          <Route exact path='/dashboard' render={props => 
            <Dashboard
              {...props} 
            />
          }/>
          <Route exact path='/edit' render={props => 
            <EditPage
              {...props} 
            />
          }/>
          <Route exact path='/tripdetails' render={props => 
            <TripDetails
              {...props} 
            />
          }/>

            :
              <Redirect to='/login'/>
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
