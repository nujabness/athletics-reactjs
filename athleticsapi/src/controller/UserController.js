import User from '../models/User';
import Nationalite from "../models/Nationalite";

class UserController {

    static async list(request, response) {
        let status = 200;
        let body = {};
        try {
            let users = await User.find().populate('nationalite_athlete').populate('role');
            body = {users, 'message': 'List User'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }

    static async delete(request, response) {
        let status = 200;
        let body = {};
        try {
            let user = await User.findOne({_id: request.body.id});
            user.delete();
            body = {user, 'message': 'Delete User'};
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
            let nationalite = await Nationalite.findOne({nom_nationalite: request.body.nationalite_athlete});
            let id = request.body.id;
            request.body.nationalite_athlete = nationalite;
            let user = await User.update({_id: id}, request.body);
            body = {user, 'message': 'Update User'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }

    static async details(request, response) {
        let status = 200;
        let body = {};
        try {
            let user = await User.findOne({_id: request.body.id}).populate('nationalite_athlete').populate('role');
            body = {user, 'message': 'Login User'};
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
            let user = await User.findOne({email: request.body.email}).populate('nationalite_athlete').populate('role');
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
    static async register(request, response) {
        let status = 200;
        let body = {};
        try {
            let nationalite = await Nationalite.findOne({nom_nationalite: 'Français'});
            let user = await User.create({
                email: request.body.email,
                password: request.body.password,
                nationalite_athlete: nationalite,
            })
            body = {user, 'message': 'register User'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
}
export default UserController;
