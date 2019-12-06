import React, {Component} from 'react';
import Participation from '../components/Participation';
import ParticipationService from "../services/ParticipationService";
import getUser from "../helpers/user";
import Profile from "../components/Profile";

class Participations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Athletics Tournament ~ Participations",
            participations: [],
            user: {
                nationalite_athlete: {}
            },
            nationalite: ''
        }
    }

    async componentDidMount() {
        let body = await getUser();
        let response = await ParticipationService.getParticipation(body);
        if (response.ok) {
            let data = await response.json();
            this.setState({
                participations: data.participations,
                user: body,
            });
        }
    }

    render() {
        return (
            <div className="container">
                <h2>{this.state.title}</h2>
                <div className="columns is-centered is-multiline">
                    <div className="column is-two-third">
                       <Profile/>
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
            </div>
        )
    }
}

export default Participations;
