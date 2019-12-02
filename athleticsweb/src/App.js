import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.sass';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login'
import Nav from './components/Nav';
import Events from './pages/Events';
import Participations from './pages/Participations';
import SettingProfile from './pages/SettingProfile';

class App extends Component {

  constructor(props){
    super(props);
    console.log('constructor')
  }

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
                                <Route path="/profile" exact component={SettingProfile}/>
                                <Route path="/events" exact component={Events}/>
                                <Route path="/participations" exact component={Participations}/>
                              </div>
                            </div>
                        </div>
                    </div>
                </section> : <Route path="/" exact component={Login}/>
            }
            <Footer/>
        </BrowserRouter>
    )
  }

}
export default App;
