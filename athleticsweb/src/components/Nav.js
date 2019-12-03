import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component{
    constructor(props){
        super(props);
    }

    logout() {
        localStorage.clear()
        window.location.replace('/')
    }

    render(){
        return(
            <aside >
                <p className="menu-label">Settings</p>
                <ul className="menu-list">
                    <li>
                        <p>Profile</p>
                        <ul>
                            <li><Link to={'/profile'}>Vew Profile</Link></li>
                            <li><Link to={'/profile/edit'}>Edit Profile</Link></li>
                        </ul>
                    </li>
                </ul>
                <p className="menu-label">Manage your profile</p>
                <ul className="menu-list">
                    <li><Link to={'/events'}>Events</Link></li>
                    <li><Link to={'/participations'}>Participations</Link></li>
                    <li><button className="button is-danger" onClick={this.logout}>Déconnexion</button></li>
                </ul>
            </aside>
        )
    }
}

export default Nav;