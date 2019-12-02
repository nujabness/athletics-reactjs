import React , {Component} from 'react';
import ParticipationService from "../services/ParticipationService";

class Profile extends Component {

    constructor(props){
        super(props);
        this.state = {
            message: '',
            user: false
        }
    }

    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'));
        this.setState({user: user})
    }

    render() {
        return(
            <div className="column">

            </div>
        )
    }
}
export default Profile;