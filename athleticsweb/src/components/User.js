import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import UserService from "../services/UserService";

class User extends Component {
    constructor(props) {
        super(props);
    }


    async supprimer(){
        let response = await UserService.delete({id: this.props.data._id});
        if (response.ok) {
            let data = await response.json();
            this.setState({message: data.message});
        }
        window.location.reload()
    }

    render() {
        return(
            <tr>
                <td>{this.props.data.nom_athlete}</td>
                <td>{this.props.data.prenom_athlete}</td>
                <td>{this.props.data.nationalite_athlete.nom_nationalite}</td>
                <td><Link className="button is-info" to={`/user/details/${this.props.data._id}`}>Détails</Link></td>
                <td><Link className="button is-warning" to={`/user/edit/${this.props.data._id}`}>Editer</Link></td>
                <td><button className="button is-danger" onClick={() => this.supprimer()}>Supprimer</button></td>
            </tr>
        )
    }
}
export default User;
