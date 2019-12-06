import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.sass';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login'
import Users from './pages/Users'
import Register from './pages/Register'
import Nav from './components/Nav';
import Events from './pages/Events';
import Participations from './pages/Participations';
import Profile from './components/Profile';
import EditProfile from './pages/edition/EditProfile'
import CreateEvent from './pages/creation/CreateEvent';
import EditEvent from './pages/edition/EditEvent';
import DetailsEvents from './pages/DetailsEvents';
import DetailsUser from './pages/details/DetailsUser';
import EditUser from './pages/edition/EditUser';

class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <Header/>
            {
                localStorage.getItem('login') ?
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-one-quarter">
                                <Nav/>
                            </div>
                            <div className="column">
                              <div className="columns is-centered">
                                <Route path="/profile" exact component={Profile}/>
                                <Route path="/profile/edit" exact component={EditProfile}/>
                                <Route path="/events" exact component={Events}/>
                                <Route path="/event/create" exact component={CreateEvent}/>
                                <Route path="/event/edit/:id" exact component={EditEvent}/>
                                <Route path="/event/details/:id" exact component={DetailsEvents}/>
                                <Route path="/participations" exact component={Participations}/>
                                <Route path="/users" exact component={Users}/>
                                <Route path="/user/edit/:id" exact component={EditUser}/>
                                <Route path="/user/details/:id" exact component={DetailsUser}/>
                              </div>
                            </div>
                        </div>
                    </div>
                </section>:
                <div>
                  <Route path="/" exact component={Login}/>
                  <Route path="/register" exact component={Register}/>
                </div>
            }
            <Footer/>
        </BrowserRouter>
    )
  }

}
export default App;
