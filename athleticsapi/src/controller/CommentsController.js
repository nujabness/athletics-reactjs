import Comment from '../models/Comment';
import Post from "../models/Post";


class CommentsController{
    static async create(request, response){
        let status = 200;
        let body = {};

        try {
            let create = await Comment.create({
                title: request.body.title,
                content: request.body.content,
                postId: request.body.postId
            });
            body = {create, 'message': 'Create comments'};
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
            let find = await Comment.findById(request.params.id).populate('postId');
            body = {find, 'message': 'details posts'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
}
export default CommentsController;