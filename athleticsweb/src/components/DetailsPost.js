import React , {Component} from 'react';
import PostService from "../services/PostService";
import {Link} from "react-router-dom";

class DetailsPost extends Component {

    constructor(props){
        super(props);
        this.state = {
            postDetail: ''
        }
    }

    async componentDidMount() {
        let response = await PostService.details(this.props.match.params.id)
        if (response.ok) {
            let data = await response.json();
            this.setState({postDetail: data});
        }
    }

    render() {
        return(
            <div className="container">
                <h1>{this.state.title}</h1>

                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Titre</th>
                        <th>Contenu</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.postDetail.id}</td>
                            <td>{this.state.postDetail.title}</td>
                            <td>{this.state.postDetail.body}</td>
                            <td><Link className="btn btn-info" to={'/'}>Retour</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default DetailsPost;