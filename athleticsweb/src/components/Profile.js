import React , {Component} from 'react';
import getUser from "../helpers/user";

class Profile extends Component {

    constructor(props){
        super(props);
        this.state = {
            user: {
                nationalite_athlete: {}
            }
        }
    }

    async componentDidMount() {
        let user = await getUser();
        this.setState({user: user})
    }

    render() {
        return(
            <div className="column is-two-thirds">
                {
                    this.state.user !== null ?
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-128x128">
                                <img className="is-rounded"
                                     src="https://image.flaticon.com/icons/svg/1226/1226092.svg"
                                     alt="Nationalite"/>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <img src={this.state.user.nationalite_athlete.link_nationalite}
                                             alt="Nationalite"/>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">{this.state.user.nom_athlete}</p>
                                    <p className="subtitle is-6">{this.state.user.prenom_athlete}</p>
                                </div>
                            </div>
                            <div className="content">
                                Athlète <span className="has-text-danger">{this.state.user.sexe_athlete}</span>,
                                Je mesure 1,75m. Mon domaine de prédilection est la COURSE. Je pèse 75kg.
                                Je suis d'origine <span className="has-text-danger">{this.state.user.nationalite_athlete.nom_nationalite}</span>.
                                <br/>
                                <a href="#">#athletics</a> <a href="#">#nopainnogain</a>
                                <br/>
                                <time dateTime="2016-1-1">11:09 PM - 06 Dec 2019</time>
                            </div>
                        </div>
                    </div>:
                    <p className="has-text-danger">Une erreur est survenue veuillez contacter l'administrateur</p>
                }
            </div>
        )
    }
}
export default Profile;
