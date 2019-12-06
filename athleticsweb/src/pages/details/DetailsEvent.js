import React , {Component} from 'react';
import EventService from "../../services/EventService";
import ParticipationService from "../../services/ParticipationService";

class DetailsEvent extends Component {

    constructor(props){
        super(props);
        this.state = {
            message: '',
            epreuve: {},
            participants: []
        }
    }

    async annulerParticipation(id) {
        let body = {
            id: id,
            epreuve: this.state.epreuve
        }
        let response = await ParticipationService.annulerParticipation(body);
        if (response.ok) {
            let data = await response.json();
            this.setState({
                message: data.message,
            });
        }
        window.location.reload()
    }


    async componentDidMount() {
        let response = await EventService.details({id: this.props.data});
        let data = await response.json();
        if (response.ok) {
            this.setState({
                epreuve: data.epreuve,
                participants: data.epreuve.participants
            })
        }else {
            this.setState({message: data.message})
        }
    }

    render() {
        return(
            <div className="column">
                <div className="card">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    <img src="data:image/png;base64,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"
                                         alt="Sprint"/>
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">{this.state.epreuve.nom_epreuve} {this.state.epreuve.type_epreuve}</p>
                                <p className="subtitle is-6">{this.state.epreuve.phase_epreuve} {this.state.epreuve.date_epreuve}</p>
                            </div>
                        </div>
                        <div>
                            <table className="table is-striped">
                                <thead>
                                    <tr>
                                        <th>Nom Athlète</th>
                                        <th>Prenom Athlète</th>
                                        <th>Medaille</th>
                                        <th>Resultat</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.participants.map((participant) => {
                                        return (
                                            <tr>
                                                <td>{participant.athlete.nom_athlete}</td>
                                                <td>{participant.athlete.prenom_athlete}</td>
                                                <td>{participant.medaille}</td>
                                                <td>{participant.resultat}</td>
                                                <td><button className="button is-warning" onClick={() => this.annulerParticipation(participant.athlete._id)}>Annuler</button></td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                        <div className="content">
                            <div className="columns">
                                <div className="column has-text-right">
                                    <button className="button is-info" onClick={this.props.retour}>Retour</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DetailsEvent;
