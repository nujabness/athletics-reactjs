import {BASE_URL} from '../constants/application.properties'

class ParticipationService {

    /**
     * Méthode getParticipation de ParticipationService permet de recupérer toutes les participation d'un athlète.
     * @param body
     * @returns {Promise<Response>}
     */
    static async getParticipation(body) {
        let init = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        }
        let call = await fetch(`${BASE_URL}/participation`, init);
        return call;
    }

    /**
     * Méthode participation de ParticipationService permet à un athlète de participer à un Event (Epreuve).
     * @param body
     * @returns {Promise<Response>}
     */
    static async participer(body) {
        let init = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        }
        let call = await fetch(`${BASE_URL}/participer`, init);
        return call;
    }

    /**
     * Méthode annulerParticipation permet à un athlète d'annuler sa participation à un Event (Epreuve).
     * @param body
     * @returns {Promise<Response>}
     */
    static async annulerParticipation(body) {
        let init = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        }
        let call = await fetch(`${BASE_URL}/annuler/participation`, init);
        return call;
    }
}

export default ParticipationService;
