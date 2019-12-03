import React, {Component} from 'react';
import UserService from "../services/UserService";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Athletics Tournament ~ Login",
            epreuves: [],
            email: '',
            password: '',
            error: false,
            messageError: ''

        }
    }

    handleChange(e){
        this.setState({
            [e.target.id] : e.target.value,
            success: false
        })
    }

    async login(e) {
        e.preventDefault();
        let body = {
            email: this.state.email,
            password: this.state.password
        }
        let response = await UserService.login(body);
        let data = await response.json();
        if(response.ok &&  data.user !== null && data.user !== undefined) {
            this.setState({error: false});
            localStorage.setItem('login', true);
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('userNationalite', JSON.stringify(data.user.nationalite_athlete));
            localStorage.setItem('userId', data.user._id);
            localStorage.setItem('userNom', data.user.nom_athlete);
            localStorage.setItem('userPrenom', data.user.prenom_athlete);
            window.location.replace('/events')
        } else {
            localStorage.setItem('login', false);
            this.setState({
                error: true,
                messageError: data.message
            });
        }
    }

    render() {
        return (
            <section className="hero has-background-danger is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                                <form action="" className="box">
                                    <div className="field">
                                        <label htmlFor="" className="label">Email</label>
                                        <div className="control has-icons-left">
                                            <input id="email" type="email" placeholder="e.g. john.smith@gmail.com" className="input" onChange={(e) => this.handleChange(e)} required/>
                                            <span className="icon is-small is-left">
                                              <i className="fa fa-envelope"/>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="" className="label">Password</label>
                                        <div className="control has-icons-left">
                                            <input id="password" type="password" placeholder="*******" className="input" onChange={(e) => this.handleChange(e)} required/>
                                            <span className="icon is-small is-left">
                                              <i className="fa fa-lock"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        {
                                            this.state.error ? <span className="has-text-danger">{this.state.messageError}</span>: null
                                        }
                                    </div>
                                    <div className="field has-text-right">
                                        <button className="button is-info" onClick={(e) => this.login(e)}>Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Login;