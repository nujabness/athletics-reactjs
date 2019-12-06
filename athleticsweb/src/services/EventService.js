import {BASE_URL} from '../constants/application.properties'

class EventService {

    /**
     * Méthode list de EventService permet de lister l'ensemble des Events (Epreuves) disponibles.
     * @returns {Promise<Response>}
     */
    static async list(){
        let init = {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        }
        let call = await fetch(`${BASE_URL}/epreuve`, init);
        return call;
    }

    /**
     * Méthode create de EventService permet de créer un Event (Epreuve).
     * @param body informations pour la création de l'event.
     * @returns {Promise<Response>}
     */
    static async create(body){
        let init = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        }
        let call = await fetch(`${BASE_URL}/epreuve/create`, init);
        return call;
    }

    /**
     * Méthode delete de EventService permet de supprimer un Event (Epreuve).
     * @param id identifiant de l'event à supprimer.
     * @returns {Promise<Response>}
     */
    static async delete(id){
        let init = {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(id)
        }
        let call = await fetch(`${BASE_URL}/epreuve/delete`, init);
        return call;
    }

    /**
     * Méthode update de EventService permet de mettre à jour un Event (Epreuve).
     * @param body informations pour la mise à jour de l'event.
     * @returns {Promise<Response>}
     */
    static async update(body){
        let init = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        }
        let call = await fetch(`${BASE_URL}/epreuve/update`, init);
        return call;
    }

    /**
     * Méthode details de EventService permet d'obtenir le détails d'un Event (Epreuve).
     * @param id identifiant de l'event à détailler.
     * @returns {Promise<Response>}
     */
    static async details(id){
        let init = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(id)
        }
        let call = await fetch(`${BASE_URL}/epreuve/details`, init);
        return call;
    }
}

export default EventService;
