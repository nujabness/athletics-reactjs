import Epreuve from '../models/Epreuve';

class EpreuveController{

    static async list(request, response) {
        let status = 200;
        let body = {};
        try {
                let posts = await Epreuve.find().populate('etat_epreuve');
            body = {posts, 'message': 'List Epreuve'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
}
export default EpreuveController;