import Nationalite from '../models/Nationalite';

class NationaliteController{

    static async list(request, response) {
        let status = 200;
        let body = {};
        try {
            let posts = await Nationalite.find();
            body = {posts, 'message': 'List Nationalite'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
}
export default NationaliteController;