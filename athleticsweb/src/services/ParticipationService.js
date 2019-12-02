const baseUrl = 'http://localhost:8090';
class ParticipationService {

    static async getParticipation(body) {
        let init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
        let call = await fetch(`${baseUrl}/participation`, init);
        return call;
    }

    static async participer(body) {
        let init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
        let call = await fetch(`${baseUrl}/participer`, init);
        return call;
    }

    static async annulerParticipation(body) {
        let init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
        let call = await fetch(`${baseUrl}/annuler/participation`, init);
        return call;
    }
}

export default ParticipationService;