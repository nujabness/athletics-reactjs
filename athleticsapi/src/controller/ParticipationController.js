import Participation from '../models/Participation';

class ParticipationController{

    static async list(request, response) {
        let status = 200;
        let body = {};
        try {
            let posts = await Participation.find()
                .populate('athlete_participation')
                .populate('medaille_participation')
                .populate('epreuve_participation');
            body = {posts, 'message': 'List Participation'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
}
export default ParticipationController;