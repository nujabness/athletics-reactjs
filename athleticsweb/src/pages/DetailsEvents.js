import React, {Component} from 'react';
import DetailsEvent from './details/DetailsEvent';

class DetailsEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Athletics Tournament ~ Details Event"
        }
    }

    retour(){
        window.location.replace('/events')
    }

    render() {
        return (
            <div className="column">
                <h3>{this.state.title}</h3>
                <DetailsEvent data={this.props.match.params.id} retour={this.retour}/>
            </div>
        )
    }
}

export default DetailsEvents;
