import Etat from '../models/Etat';

class EtatController{

    static async list(request, response) {
        let status = 200;
        let body = {};
        try {
            let posts = await Etat.find();
            body = {posts, 'message': 'List Etat'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
}
export default EtatController;