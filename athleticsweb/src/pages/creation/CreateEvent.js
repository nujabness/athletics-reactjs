import React , {Component} from 'react';
import EventService from "../../services/EventService";

class CreateEvent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            nom_epreuve: '',
            type_epreuve: 'COURSE',
            date_epreuve: '',
            phase_epreuve: 'FINAL',
            error: false
        }
    }

    handleChange(e){
        this.setState({[e.target.id] : e.target.value})
    }

    async createEvent(e) {
        e.preventDefault();
        let body = {
            nom_epreuve: this.state.nom_epreuve,
            type_epreuve: this.state.type_epreuve,
            date_epreuve: this.state.date_epreuve,
            phase_epreuve: this.state.phase_epreuve
        }

        let response = await EventService.create(body);
        if (response.ok) {
            this.setState({error: false})
            let data = await response.json();
            this.setState({
                message: data.message,
            });
            window.location.replace('/events')
        } else {
            this.setState({error: true})
        }
    }

    render() {
        return(
            <div className="columns is-centered">
                <div className="column is-two-thirds">
                    <form onSubmit={(e)=>this.createEvent(e)}>
                        <div className="field">
                            <div className="control">
                                <label>Nom Epreuve <input id="nom_epreuve" className="input is-info" type="text" onChange={(e) => this.handleChange(e)} required/></label>
                            </div>
                        </div>
                        <div className="field">
                            <label>Type Epreuve
                                <div className="select">
                                    <select id="type_epreuve" onChange={(e) => this.handleChange(e)} defaultValue="COURSE" required>
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
                                <div className="control">
                                    <input id="date_epreuve" onChange={(e) => this.handleChange(e)} className="input" type="date" required/>
                                </div>
                            </label>
                        </div>
                        <br/>
                        <div className="field">
                            <label> Phase Epreuve
                                <br/>
                                <div className="select">
                                    <select id="phase_epreuve" onChange={(e) => this.handleChange(e)} defaultValue="FINAL" required>
                                        <option value="FINAL" selected>FINAL</option>
                                        <option value="DEMI-FINAL">DEMI-FINAL</option>
                                        <option value="QUART-FINAL">QUART-FINAL</option>
                                        <option value="8ème FINAL">8ème FINAL</option>
                                        <option value="POUL">POUL</option>
                                    </select>
                                </div>
                            </label>
                        </div>
                        <br/>
                        {
                            this.state.error? <p className="has-text-danger">Veuillez remplir le formulaire</p>: null
                        }
                        <br/>
                        <button type="submit" className="button is-danger" >Create</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default CreateEvent;
