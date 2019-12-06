import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import getUser from "../helpers/user";

class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeSatutHtml: null,
            user: {
                role: {}
            }
        }
    }
    manageLinkFocusCss (e) {
        if (this.state.activeSatutHtml !== null) {
            this.state.activeSatutHtml.classList.remove('is-active')
            this.state.activeSatutHtml = null
        }
        if (this.state.activeSatutHtml === null) {
            this.state.activeSatutHtml = e.target
            this.state.activeSatutHtml.classList.add('is-active')
        }
    }

    async componentDidMount() {
        let user = await getUser();
        this.setState({user: user})
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
                            <li><Link onClick={(e) => this.manageLinkFocusCss(e)} to={'/profile'}>Vew Profile</Link></li>
                            <li><Link onClick={(e) => this.manageLinkFocusCss(e)} to={'/profile/edit'}>Edit Profile</Link></li>
                        </ul>
                    </li>
                </ul>
                {
                    this.state.user.role.role === 'ADMIN' ?
                    <div>
                        <p className="menu-label">Manage your profile</p>
                        <ul className="menu-list">
                            <li><Link onClick={(e) => this.manageLinkFocusCss(e)} to={'/events'}>Events</Link></li>
                            <li><Link onClick={(e) => this.manageLinkFocusCss(e)} to={'/participations'}>Participations</Link></li>
                        </ul>
                        <p className="menu-label">Manage the tournament</p>
                        <ul className="menu-list">
                            <li><Link onClick={(e) => this.manageLinkFocusCss(e)} to={'/event/create'}>Create Events</Link></li>
                            <li><Link onClick={(e) => this.manageLinkFocusCss(e)} to={'/users'}>All Users</Link></li>
                            <br/>
                            <li><button className="button is-danger" onClick={this.logout}>Déconnexion</button></li>
                        </ul>
                    </div>:
                    <div>
                        <p className="menu-label">Manage your profile</p>
                        <ul className = "menu-list">
                            <li><Link onClick={(e) => this.manageLinkFocusCss(e)} to={'/events'}>Events</Link></li>
                            <li><Link onClick={(e) => this.manageLinkFocusCss(e)} to={'/participations'}>Participations</Link></li>
                            <br/>
                            <li><button className="button is-danger" onClick={this.logout}>Déconnexion</button></li>
                        </ul>
                    </div>
                }
            </aside>
        )
    }
}

export default Nav;
