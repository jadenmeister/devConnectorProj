import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar.js';
import Landing from './components/layout/Landing.js';
import Register from './components/auth/Register.js';
import Login from './components/auth/Login.js';
import Alert from './components/layout/Alert.js';
import Dashboard from './components/dashboard/Dashboard.js';
import CreateProfile from './components/profile-form/CreateProfile.js';
import EditProfile from './components/profile-form/EditProfile.js';
import AddExperience from './components/profile-form/AddExperience.js';
import AddEducation from './components/profile-form/AddEducation.js';
import Profiles from './components/profiles/Profiles.js';
import Profile from './components/profile/Profile.js';
import Posts from './components/posts/Posts.js';
import Post from './components/post/Post.js';
import PrivateRoute from './components/routing/PrivateRoute.js';

//needed to be able to use redux
import { Provider } from 'react-redux';
import store from './store'
import { loadUser } from './actions/auth.js';
import setAuthToken from './utils/setAuthToken.js';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
}, []);
  return (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
              <section className="container">
                <Alert />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profiles" component={Profiles} />
            <Route exact path="/profile/:id" component={Profile} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/create-profile" component={CreateProfile} />
            <PrivateRoute exact path="/edit-profile" component={EditProfile} />
            <PrivateRoute exact path="/add-experience" component={AddExperience} />
            <PrivateRoute exact path="/add-education" component={AddEducation} />
            <PrivateRoute exact path="/posts" component={Posts} />
            <PrivateRoute exact path="/posts/:id" component={Post} />
            </section>
          </Switch>
      </Fragment>
    </Router>
  </Provider>
)};

export default App;
