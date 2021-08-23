import React from 'react';
import Header from './Header';
// import IsLoadingAndError from './IsLoadingAndError';
import BestBooks from './BestBooks'
import Login from './Login'
import Profile from './Profile'
import Footer from './Footer';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Login from './Login';

class App extends React.Component {

  render() {
    const{isAuthenticated}=this.props.auth0
    // console.log('app', this.props);
    return(
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
                {isAuthenticated?<BestBooks/>:<Login/>}
                
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <Route exact path="/profile">
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
                
                {isAuthenticated?<Profile/>:<Login/>}
              </Route>
            </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

  export default withAuth0(App);
