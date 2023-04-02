import axios from "axios";

const BASEURL = "http://localhost:8000";

export const getPredictions = async (data) => {
    return await axios.post(`${BASEURL}/ml/predict/`, data);
}
