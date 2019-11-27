import React , {Component} from 'react';
import {Link} from "react-router-dom";

class Post extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return(
            <tr>
                <td>Post {this.props.data.id}</td>
                <td><Link to={`/post/${this.props.data.id}`}>Details</Link></td>
                <td><button className="btn btn-danger" onClick={() => this.props.deletePost(this.props.data.id)}>Supprimer</button></td>
            </tr>
        )
    }
}
export default Post;