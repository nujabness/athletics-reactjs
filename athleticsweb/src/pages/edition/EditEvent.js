import React , {Component} from 'react';
import EventService from "../../services/EventService";

class EditEvent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            nom_epreuve: '',
            type_epreuve: '',
            date_epreuve: '',
            phase_epreuve: '',
            epreuve: {}
        }
    }

    handleChange(e){
        this.setState({[e.target.id] : e.target.value})
    }

    async componentDidMount() {
        let response = await EventService.details({id: this.props.match.params.id});
        if (response.ok) {
            let data = await response.json();
            this.setState({epreuve: data.epreuve});
        }
    }

    async updateEvent(e) {
        e.preventDefault();
        let body = {
            id: this.props.match.params.id,
            nom_epreuve: this.state.nom_epreuve,
            type_epreuve: this.state.type_epreuve,
            date_epreuve: this.state.date_epreuve,
            phase_epreuve: this.state.phase_epreuve
        }

        if(body.nom_epreuve === '') {body.nom_epreuve = this.state.epreuve.nom_epreuve}
        if(body.type_epreuve === '') {body.type_epreuve = this.state.epreuve.type_epreuve}
        if(body.date_epreuve === '') {body.date_epreuve = this.state.epreuve.date_epreuve}
        if(body.phase_epreuve === '') {body.phase_epreuve = this.state.epreuve.phase_epreuve}

        let response = await EventService.update(body);
        let data = await response.json();
        if (response.ok) {
            this.setState({
                message: data.message,
            });
            window.location.replace('/events')
        }
    }

    render() {
        return(
            <div className="columns is-centered">
                <div className="column is-two-thirds">
                    <form onSubmit={(e)=>this.updateEvent(e)}>
                        <div className="field">
                            <div className="control">
                                <label>Nom Epreuve <input id="nom_epreuve" defaultValue={this.state.epreuve.nom_epreuve} className="input is-info" type="text" onChange={(e) => this.handleChange(e)} required/></label>
                            </div>
                        </div>
                        <div className="field">
                            <label>Type Epreuve
                                <div className="select">
                                    <select id="type_epreuve" onChange={(e) => this.handleChange(e)} required>
                                        <option value="LANCER">LANCER</option>
                                        <option value="COURSE">COURSE</option>
                                        <option value="SAUT">SAUT</option>
                                        <option value="DECATHLON">DECATHLON</option>
                                    </select>
                                </div>
                            </label>
                        </div>
                        <div className="field">
                            <label>Date Epreuve
                                <br/>
                                <div>
                                    <input id="date_epreuve" defaultValue={this.state.epreuve.date_epreuve} onChange={(e) => this.handleChange(e)} className="input" type="date" required/>
                                </div>
                            </label>
                        </div>
                        <br/>
                        <div className="field">
                            <label> Phase Epreuve
                                <br/>
                                <div className="control">
                                    <div className="select">
                                        <select id="phase_epreuve" onChange={(e) => this.handleChange(e)} required>
                                            <option value="FINAL" selected>FINAL</option>
                                            <option value="DEMI-FINAL">DEMI-FINAL</option>
                                            <option value="QUART-FINAL">QUART-FINAL</option>
                                            <option value="8ème FINAL">8ème FINAL</option>
                                            <option value="POUl">POUL</option>
                                        </select>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <br/><br/>
                        <div className="columns">
                            <div className="column">
                                <button type="submit" className="button is-danger">Update</button>
                            </div>
                            <div className="column">
                                <button className="button is-warning" type="reset">Annuler</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default EditEvent;
