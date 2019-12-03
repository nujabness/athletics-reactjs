const baseUrl = 'http://localhost:8090';
class NationaliteService {

    static async list() {
        let init = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }
        let call = await fetch(`${baseUrl}/nationalite`, init);
        return call;
    }
}
export default NationaliteService;