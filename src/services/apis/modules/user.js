import axios from "axios";

export default {
    register: async (newUser) => {
        return await axios.post(`${process.env.REACT_APP_SERVER_HOST_API}/users`, newUser);
    }
}