import TypeUser from "../models/TypeUser";

class TypeController {

    static async list(request, response) {
        let status = 200;
        let body = {};
        try {
            let typeusers = await TypeUser.find();
            body = {typeusers, 'message': 'Liste des TypeUser'};
        } catch (error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
}
export default TypeController;
