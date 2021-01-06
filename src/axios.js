import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-clone-a8085.cloudfunctions.net/api"
    //http://localhost:5001/clone-a8085/us-central1/api
});

export default instance
