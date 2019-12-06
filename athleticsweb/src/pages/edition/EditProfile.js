import React , {Component} from 'react';
import NationaliteService from '../../services/NationaliteService';
import UserService from '../../services/UserService';
import getUser from "../../helpers/user";

class EditProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            user: {},
            nom_athlete: '',
            prenom_athlete: '',
            sexe_athlete: '',
            nationalite_athlete: '',
            nationalites: [],
        }
    }

    handleChange(e){
        this.setState({[e.target.id] : e.target.value})
    }

    async componentDidMount() {
        let response = await NationaliteService.list();
        if (response.ok) {
            let data = await response.json();
            this.setState({nationalites: data.nationalites});
        }
        let user = await getUser();
        this.setState({user: user})
    }

    async updateUser(e) {
        e.preventDefault();
        let body = {
            id: localStorage.getItem('userId'),
            nom_athlete: this.state.nom_athlete,
            prenom_athlete: this.state.prenom_athlete,
            sexe_athlete: this.state.sexe_athlete,
            nationalite_athlete: this.state.nationalite_athlete
        }
        if(body.nom_athlete === '') {body.nom_athlete = this.state.user.nom_athlete}
        if(body.prenom_athlete === '') {body.prenom_athlete = this.state.user.prenom_athlete}
        if(body.sexe_athlete === '') {body.sexe_athlete = this.state.user.sexe_athlete}
        if(body.nationalite_athlete === '') {body.nationalite_athlete = this.state.user.nationalite_athlete.nom_nationalite}

        let response = await UserService.update(body);
        if (response.ok) {
            let data = await response.json();
            this.setState({message: data.message});
            window.location.replace('/profile')
        }
    }

    render() {
        return(
            <div className="columns is-centered">
                <div className="column is-two-thirds">
                    <form onSubmit={(e)=>this.updateUser(e)}>
                        <div className="field">
                            <div className="control">
                                <label>Nom Athlete <input id="nom_athlete" className="input is-info" type="text" onChange={(e) => this.handleChange(e)} defaultValue={this.state.user.nom_athlete} required/></label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <label>Prénom Athlète <input id="prenom_athlete" className="input is-info" type="text" onChange={(e) => this.handleChange(e)} defaultValue={this.state.user.prenom_athlete} required/></label>
                            </div>
                        </div>
                        <label>Sexe Athlète
                            <br/>
                            <p>{this.state.user ? this.state.user.sexe_athlete : null}</p>
                            <div className="select">
                                <select id="sexe_athlete" onChange={(e) => this.handleChange(e)} defaultValue={this.state.user.sexe_athlete} required>
                                    <option value="HOMME">HOMME</option>
                                    <option value="FEMME">FEMME</option>
                                    <option value="AUTRE">AUTRE</option>
                                </select>
                            </div>
                        </label>
                        <br/>
                        <label> Nationalite Athlète
                            <br/>
                            <div className="select">
                                <select id="nationalite_athlete" onChange={(e) => this.handleChange(e)} defaultValue={this.state.nom_nationalite} required>
                                    {
                                        this.state.nationalites.map((nationalite, index) =>{
                                            return <option key={index}>{nationalite.nom_nationalite}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </label>
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
export default EditProfile;
