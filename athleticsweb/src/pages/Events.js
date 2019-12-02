import React, {Component} from 'react';
import Event from '../components/Event';
import EpreuveService from '../services/EventService'

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Athletics Tournament ~ Events",
            epreuves: []
        }
    }

    async componentDidMount() {
        let response = await EpreuveService.list();
        if (response.ok) {
            let data = await response.json();
            this.setState({epreuves: data.epreuves});
        }
    }

    render() {
        return (
            <div className="column">
                <h3>{this.state.title}</h3>
                <div className="columns is-multiline">
                        {
                            this.state.epreuves.map((item, index) => {
                                return(
                                    <Event key={index} data={item}/>
                                )
                            })
                        }
                </div>
            </div>
        )
    }
}

export default Events;