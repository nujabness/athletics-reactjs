import React, {Component} from 'react';
import UserService from '../services/UserService';
import User from '../components/User';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Athletics Tournament ~ All Users",
            users: [],
        }
    }

    async componentDidMount() {
        let response = await UserService.list();
        if (response.ok) {
            let data = await response.json();
            this.setState({users: data.users});
        }
    }

    render() {
        return (
            <div className="container">
                <h2>{this.state.title}</h2>
                <div className="columns is-centered">
                    <div className="column">
                        <table className="table is-striped">
                            <thead>
                                <tr>
                                    <th>Nom Athlète</th>
                                    <th>Prénom Athlète</th>
                                    <th>Nationalité Athlète</th>
                                    <th>Détails</th>
                                    <th>Editier</th>
                                    <th>Supprimer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map((user, index) => {
                                        return(
                                            <User key={index} data={user}/>
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

export default Users;
