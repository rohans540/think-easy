import axios from "axios";

import { BASE_URL, AUTH_REFRESH } from "../constants";


axios.defaults.baseURL = BASE_URL

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.interceptors.response.use(resp => resp, async error => {
    if(error.response.status === 401) {
        const token = localStorage.getItem('refreshToken');
        const response = await axios.post(AUTH_REFRESH, { token })
        if(response.status === 200) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
            return axios(error.config);
        }
    }
    return error;
})