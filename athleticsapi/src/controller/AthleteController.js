import Athlete from '../models/Athlete';

class AthleteController{
    static async list(request, response) {
        let status = 200;
        let body = {};
        try {
            let athletes = await Athlete.find().populate("nationalite_athlete");
            body = {athletes, 'message': 'List Athlete'};
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
            let find = await Athlete.findById({
                _id: request.params.id
            });
            body = {find, 'message': 'Details Athlete'};
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
            let create = await Athlete.create({
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

    static async delete(request, response){
        let status = 200;
        let body = {};
        try {
            let id = request.params.id;
            await Athlete.deleteOne(id);
            body = {find, 'message': 'Delete Athlete'};
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
            let post = await Athlete.findById(id);
            await post.update(request.body);
            body = {post, 'message': 'Uppdate Athlete'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
}

export default AthleteController;