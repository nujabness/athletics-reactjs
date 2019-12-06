import {BASE_URL} from '../constants/application.properties'

class UserService {

    /**
     * Méthode list de UserService permet de lister l'ensemble des Users.
     * @returns {Promise<Response>}
     */
    static async list(){
        let init = {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        }
        let call = await fetch(`${BASE_URL}/users`, init);
        return call;
    }

    /**
     * Méthode login de UserService permet à un Users de s'autentifier.
     * @param body
     * @returns {Promise<Response>}
     */
    static async login(body){
        let init = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        }
        let call = await fetch(`${BASE_URL}/login`, init);
        return call;
    }

    /**
     * Méthode register de UserService permet à un Users de s'inscrire.
     * @param body
     * @returns {Promise<Response>}
     */
    static async register(body){
        let init = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        }
        let call = await fetch(`${BASE_URL}/register`, init);
        return call;
    }

    /**
     * Méthode delete de UserService permet de supprimer un User.
     * @param id identifiant du User à supprimer.
     * @returns {Promise<Response>}
     */
    static async delete(id){
        let init = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(id)
        }
        let call = await fetch(`${BASE_URL}/user/delete`, init);
        return call;
    }

    /**
     * Méthode update de UserService permet de mettre à jour un Users.
     * @param body information pour la mise à jour du User.
     * @returns {Promise<Response>}
     */
    static async update(body){
        let init = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
        let call = await fetch(`${BASE_URL}/user/update`, init);
        return call;
    }

    /**
     * Méthode details de UserService permet de récuperer les détails d'un Users.
     * @param body
     * @returns {Promise<Response>}
     */
    static async details(body){
        let init = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        }
        let call = await fetch(`${BASE_URL}/user/details`, init);
        return call;
    }
}

export default UserService;
