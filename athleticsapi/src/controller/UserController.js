import User from '../models/User';

class UserController {

    static async list(request, response) {
        let status = 200;
        let body = {};
        try {
            let posts = await User.find();
            body = {posts, 'message': 'List User'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
}
export default UserController;