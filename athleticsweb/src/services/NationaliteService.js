import {BASE_URL} from '../constants/application.properties'

class NationaliteService {

    /**
     * Méthode list de NationaliteService permet de lister toutes les Nationalités.
     * @returns {Promise<Response>}
     */
    static async list() {
        let init = {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        }
        let call = await fetch(`${BASE_URL}/nationalite`, init);
        return call;
    }
}
export default NationaliteService;
