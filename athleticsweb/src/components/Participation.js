import React , {Component} from 'react';
import getUser from "../helpers/user";

class Participation extends Component {

    constructor(props){
        super(props);
        this.state = {
            user: {},
            medaille: 'PAS DE MEDAILLE',
            resultat: 'ABS'
        }
    }

    async componentDidMount() {
        let user = await getUser();
        this.setState({user: user})
        if(this.props.data.resultat) {
            this.setState({resultat: this.props.data.resultat})
        }
        if(this.props.data.medaille) {
            this.setState({medaille: this.props.data.medaille})
        }
    }

    render() {
        return(
            <tr>
                <td>{this.state.user.nom_athlete}</td>
                <td>{this.state.user.prenom_athlete}</td>
                <td>{this.props.data.epreuve.nom_epreuve}</td>
                <td>{this.props.data.epreuve.phase_epreuve}</td>
                <td>{this.props.data.epreuve.date_epreuve}</td>
                <td>{this.state.medaille}</td>
                <td>{this.state.resultat}</td>
            </tr>
        )
    }
}
export default Participation;
