import React, { Component } from 'react';
import getUser from "../helpers/user";

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: {
                role:{
                    role: ''
                }
            }
        }
    }

    async componentDidMount() {
        let user = await getUser();
        this.setState({user: user})
    }

    render(){
        return(
            <section className="hero has-background-danger">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <h1 className="title has-text-white">
                                    Athletics Tournament
                                </h1>
                                <h4 className="subtitle has-text-grey-light">
                                    <i>Run for win</i>
                                </h4>
                            </div>
                            <div className="column">
                                <h3 className="has-text-right has-text-white">{this.state.user !== null? this.state.user.nom_athlete:''} {this.state.user !== null? this.state.user.prenom_athlete:''}</h3>
                                <h4 className="subtitle has-text-right has-text-white">
                                    {this.state.user !== null? <i>Level: {this.state.user.role.role}</i>: null}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Header;

