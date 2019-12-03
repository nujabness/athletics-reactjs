const baseUrl = 'http://localhost:8090';
class UserService {

    static async login(body){
        let init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
        let call = await fetch(`${baseUrl}/login`, init);
        return call;
    }

    static async update(body){
        let init = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
        let call = await fetch(`${baseUrl}/user/update`, init);
        return call;
    }



    static async register(body){
        let init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
        let call = await fetch(`${baseUrl}/register`, init);
        return call;
    }
}

export default UserService;