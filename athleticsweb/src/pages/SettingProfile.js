import React, {Component} from 'react';
import Profile from '../components/Profile';

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
                <Profile/>
            </div>
        )
    }
}

export default SettingProfile;