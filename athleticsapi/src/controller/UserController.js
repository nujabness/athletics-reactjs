import User from '../models/User';

class UserController {

    static async list(request, response) {
        let status = 200;
        let body = {};
        try {
            let user = await User.find().populate('nationalite_athlete');
            body = {user, 'message': 'Update User'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }


    static async update(request, response) {
        let status = 200;
        let body = {};
        try {
            let id = request.body.id;
            let user = await User.updateOne({id: id}, body);
            body = {user, 'message': 'Update User'};
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
            let user = await User.findOne({email: request.body.email}).populate('nationalite_athlete');
            if(user.password == request.body.password){
                body = {user, 'message': 'Login User'};
            }else {
                body = {'message': 'Email ou mot de passe incorrect !'};
            }

        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
}
export default UserController;