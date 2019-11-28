import Medaille from '../models/Medaille';

class MedailleController{

    static async list(request, response) {
        let status = 200;
        let body = {};
        try {
            let posts = await Medaille.find();
            body = {posts, 'message': 'List Medaille'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
}
export default MedailleController;