import React, {Component} from 'react';
import Post from '../components/Post';
import PostService from '../services/PostService'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Blog HITEMA",
            posts: [
                {
                    id: 1,
                    title: 'post 1',
                    content: 'sdfsdfsdfdsfsdf'
                },
                {
                    id: 2,
                    title: 'post 2',
                    content: 'wdfsd5f4sd654f65sd4f'
                }
            ]
        }
    }

    componentWillMount() {
        console.log('je suis la !');
    }

    async componentDidMount() {
        let response = await PostService.list();
        if (response.ok) {
            let data = await response.json();
            this.setState({posts: data});
        }
    }

    async deletePost (id) {
        let response = await PostService.delete(id);
        if(response.ok) {
          let posts = this.state.posts;
          let index = posts.findIndex(posts => posts.id === id);
          posts.splice(index, 1);
          this.setState({posts: posts});
        }
    }

    render() {
        return (
            <div className="container">
                <h1>{this.state.title}</h1>

                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Details</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.posts.map((item, index) => {
                                return(
                                    <Post key={index} data={item} deletePost={(id) => this.deletePost(id)}/>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Home;