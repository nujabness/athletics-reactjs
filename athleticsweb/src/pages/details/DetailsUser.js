import React , {Component} from 'react';
import UserService from "../../services/UserService";

class DetailsUser extends Component {

    constructor(props){
        super(props);
        this.state = {
            message: '',
            user: {
                nationalite_athlete: {}
            }
        }
    }

    retour() {
        window.location.replace('/users')
    }

    async componentDidMount() {
        let response = await UserService.details({id: this.props.match.params.id});
        if (response.ok) {
            let data = await response.json();
            this.setState({user: data.user});
        }
    }

    render() {
        return(
            <div className="column is-two-thirds">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-128x128">
                            <img className="is-rounded" src="https://image.flaticon.com/icons/svg/1226/1226092.svg" alt="Athlete"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    <img src={this.state.user.nationalite_athlete.link_nationalite} alt="Nationalite"/>
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">{this.state.user.nom_athlete}</p>
                                <p className="subtitle is-6">{this.state.user.prenom_athlete}</p>
                            </div>
                        </div>
                        <div className="content">
                            Athlète <span className="has-text-danger">{this.state.user.sexe_athlete}</span>, Je mesure 1,75m. Mon domaine de prédilection est la COURSE. Je pèse 75kg.
                            Je suis d'origine <span className="has-text-danger">{this.state.user.nationalite_athlete.nom_nationalite}</span>.
                            <br/>
                            <a href="#">#athletics</a> <a href="#">#nopainnogain</a>
                            <br/>
                            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                            <div className="columns">
                                <div className="column has-text-right">
                                    <button className="button is-danger" onClick={() => this.retour()}>Retour</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DetailsUser;
