import React , {Component} from 'react';
import NationaliteService from '../services/NationaliteService';
import UserService from '../services/UserService';
class Profile extends Component {

    constructor(props){
        super(props);
        this.state = {
            message: '',
            user: {},
            nom_athlete: '',
            prenom_athlete: '',
            sexe_athlete: '',
            nationalite_athlete: '',
            nationalites:[],
            nationalite: {}
        }
    }

    handleChange(e){
        this.setState({
            [e.target.id] : e.target.value,
            success: false
        })
    }

    async updateUser(){
        let body = {
            id: localStorage.getItem('userId'),
            nom_athlete: this.state.nom_athlete,
            prenom_athlete: this.state.prenom_athlete,
            sexe_athlete: this.state.sexe_athlete
        }
        if(this.state.nom_athlete == undefined) {body.nom_athlete = this.state.user.nom_athlete}
        if(this.state.prenom_athlete == undefined) {body.prenom_athlete = this.state.user.prenom_athlete}
        if(this.state.sexe_athlete == undefined) {body.sexe_athlete = this.state.user.sexe_athlete}

        // if(this.state.nationalite_athlete != undefined) {body.nationalite_athlete = this.state.nationalite_athlete}
        // else{body.nationalite_athlete = this.state.user.nationalite_athlete}

        let response = await UserService.update(body);
        if (response.ok) {
            let data = await response.json();
            this.setState({
                message: data.message,
            });
        }
    }

    async componentDidMount() {
        let response = await NationaliteService.list();
        if (response.ok) {
            let data = await response.json();
            this.setState({nationalites: data.nationalites});
        }
        let user = JSON.parse(localStorage.getItem('user'));
        let nationalite = JSON.parse(localStorage.getItem('userNationalite'));
        this.setState({
            user: user,
            nationalite: nationalite
        })
    }

    render() {
        return(
            <div className="columns is-centered">
                <div className="column is-two-thirds">
                    <div className="field">
                        <div className="control">
                            <input id="nom_athlete" className="input is-info" type="text" onChange={(e) => this.handleChange(e)} defaultValue={this.state.user.nom_athlete}/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input id="prenom_athlete" className="input is-info" type="text" onChange={(e) => this.handleChange(e)} defaultValue={this.state.user.prenom_athlete}/>
                        </div>
                    </div>
                    <div className="select">
                        <select id="sexe_athlete" onChange={(e) => this.handleChange(e)}>
                            <option>HOMME</option>
                            <option>FEMME</option>
                            <option>AUTRE</option>
                        </select>
                    </div>
                    <div className="select">
                        <select id="nationalite_athlete" onChange={(e) => this.handleChange(e)}>
                            {
                                this.state.nationalites.map((nationalite) =>{
                                    return <option>{nationalite.nom_nationalite}</option>
                                })
                            }
                        </select>
                    </div>
                    <button className="button is-danger" onClick={this.updateUser}>Update</button>
                </div>
            </div>
        )
    }
}
export default Profile;