import React, {Component} from 'react';
import Participation from '../components/Participation';
import ParticipationService from "../services/ParticipationService";

class Participations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Athletics Tournament ~ Participations",
            participations: [],
            user: '',
            nationalite: ''
        }
    }

    async componentDidMount() {
        let body = JSON.parse(localStorage.getItem('user'));
        let nationalite = JSON.parse(localStorage.getItem('userNationalite'));
        let response = await ParticipationService.getParticipation(body);
        if (response.ok) {
            let data = await response.json();
            this.setState({
                participations: data.participations,
                user: body,
                nationalite: nationalite
            });
        }
    }

    render() {
        return (
            <div className="container">
                <h2>{this.state.title}</h2>
                <div className="columns is-centered">
                    <div className="column is-three-fifths">
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
                </div>
                <div className="column">
                    <h2>Participations</h2>
                    <table className="table is-striped">
                        <thead>
                            <tr>
                                <th>Nom Athlète</th>
                                <th>Prenom Athlète</th>
                                <th>Epreuve</th>
                                <th>Phase</th>
                                <th>Date</th>
                                <th>Medaille</th>
                                <th>Resultat</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.participations.map((epreuve, index) => {
                                    return(
                                        <Participation key={index} data={epreuve}/>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Participations;