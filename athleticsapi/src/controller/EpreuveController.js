import Epreuve from '../models/Epreuve';

class EpreuveController{

    static async list(request, response) {
        let status = 200;
        let body = {};
        try {
            let epreuves = await Epreuve.find().populate('participants.athlete');
            body = {epreuves, 'message': 'List Epreuve'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
    static async participer(request, response) {
        let status = 200;
        let body = {};
        try {
            let epreuve = await Epreuve.findOne({_id: request.body.epreuve._id}).populate('participants.athlete');
            let bOk = false;
            epreuve.participants.forEach((participant) => {
                if (participant.athlete._id == request.body.user._id){
                    bOk = true
                }
            });
            if (!bOk){
                epreuve.participants.push({athlete: request.body.user})
            }
            await epreuve.save();
            body = {'message': 'participation success'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }

    static async annulerParticiper(request, response) {
        let status = 200;
        let body = {};
        try {
            let epreuve = await Epreuve.findOne({_id: request.body.epreuve._id}).populate('participants.athlete');
            let bOk = false;
            epreuve.participants.forEach((participant, index) => {
                if (participant.athlete._id == request.body.user._id){
                    epreuve.participants.splice(index, 1);
                }
            });
            await epreuve.save();
            body = {'message': 'participation success'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }

    static async getParticipation(request, response) {
        let status = 200;
        let body = {};
        try {
            let epreuves = await Epreuve.find().populate('participants.athlete');
            let participations = [];
            epreuves.forEach((epreuve) => {
                epreuve.participants.forEach((participant) => {
                    if (participant.athlete._id == request.body._id){
                        participations.push({
                            epreuve: epreuve,
                            medaille: participant.medaille,
                            resultat: participant.resultat
                        })
                    }
                })
            })
            body = {participations, 'message': 'Participation Epreuve'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
}
export default EpreuveController;