import React, {Component} from 'react';
import Profile from '../components/Profile';
import EditProfile from '../components/EditProfile';

class SettingProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Athletics Tournament ~ Profile",
            user: {}
        }
    }

    async componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'))
        this.setState({user: user});
    }

    render() {
        return (
            <div className="column">
                <h3>{this.state.title}</h3>
                <EditProfile/>
            </div>
        )
    }
}

export default SettingProfile;