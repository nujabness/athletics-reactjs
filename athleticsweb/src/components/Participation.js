import React , {Component} from 'react';

class Participation extends Component {

    constructor(props){
        super(props);
        this.state = {
            userNom: '',
            userPrenom: '',
            medaille: 'PAS DE MEDAILLE',
            resultat: 'ABS'
        }
    }

    componentDidMount() {
        this.setState({
            userNom: localStorage.getItem('userNom'),
            userPrenom: localStorage.getItem('userPrenom')
        })
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
                <td>{this.state.userNom}</td>
                <td>{this.state.userPrenom}</td>
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