import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <section className="hero has-background-danger">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title has-text-white">
                            Athletics Tournament
                        </h1>
                        <h4 className="subtitle has-text-grey-light">
                            <i>Run for win</i>
                        </h4>
                    </div>
                </div>
            </section>
        )
    }
}

export default Header;

