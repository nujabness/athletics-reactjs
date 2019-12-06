import UserService from "../services/UserService";

const getUser = async () => {
    let response = await UserService.details({id: localStorage.getItem('userId')});
    if (response.ok) {
        let data = await response.json();
        return data.user;
    }
    return null;
}

export default getUser;
