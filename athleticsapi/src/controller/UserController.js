import User from '../models/User';

class UserController {

    static async list(request, response) {
        let status = 200;
        let body = {};
        try {
            let posts = await User.find().populate('nationalite_athlete');
            body = {posts, 'message': 'List User'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }

    static async login(request, response) {
        let status = 200;
        let body = {};
        try {
            let user = await User.findOne({email: request.body.email, password: request.body.password }).populate('nationalite_athlete');
            body = {user, 'message': 'Login User'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
}
export default UserController;