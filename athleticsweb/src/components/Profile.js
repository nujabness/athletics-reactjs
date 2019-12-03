import React , {Component} from 'react';
import ParticipationService from "../services/ParticipationService";

class Profile extends Component {

    constructor(props){
        super(props);
        this.state = {
            message: '',
            user: {},
            nationalite: {}
        }
    }

    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('user'));
        let nationalite = JSON.parse(localStorage.getItem('userNationalite'));
        this.setState({
            user: user,
            nationalite: nationalite
        })
    }

    render() {
        return(
            <div className="column is-two-thirds">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-128x128">
                            <img className="is-rounded" src="https://image.flaticon.com/icons/svg/1226/1226092.svg" alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    <img src={this.state.nationalite.link_nationalite} alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">{this.state.user.nom_athlete}</p>
                                <p className="subtitle is-6">{this.state.user.prenom_athlete}</p>
                            </div>
                        </div>
                        <div className="content">
                            Sexe: {this.state.user.sexe_athlete} <br/>
                            <a href="#">#athletics</a> <a href="#">#nopainnogain</a>
                            <br/>
                            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile;