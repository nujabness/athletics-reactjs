import Post from '../models/Post';

class PostsController{
    static async list(request, response) {

        let status = 200;
        let body = {};

        try {
            let posts = await Post.find();
            body = {posts, 'message': 'List posts'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }

    static async create(request, response){
        let status = 200;
        let body = {};

        try {
            let create = await Post.create({
                title: request.body.title,
                content: request.body.content
            });
            body = {create, 'message': 'Create posts'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }

    static async details(request, response){
        let status = 200;
        let body = {};

        try {
            let find = await Post.findById({
                _id: request.params.id
            });
            body = {find, 'message': 'details posts'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }

    static async delete(request, response){
        let status = 200;
        let body = {};
        try {
            let id = request.params.id;
            await Post.deleteOne(id);
            body = {find, 'message': 'delete posts'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }

    static async update(request, response){
        let status = 200;
        let body = {};
        try {
            let id = request.params.id;
            let post = await Post.findById(id);
            await post.update(request.body);
            body = {post, 'message': 'Details'};
            body = {find, 'message': 'delete posts'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
}

export default PostsController;