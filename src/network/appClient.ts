import axios from 'axios';
import { toast } from 'react-toastify';
import useToken from '../store/useToken';
import sendLoginRequest from '../services/auth/logIn.service';

export const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

axiosClient.interceptors.request.use(
    async (config) => {
        const token = useToken.getState().token;

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        } else {
            // const hashPassword = localStorage.getItem('hashPassword');

            // if (!hashPassword) {
            //     toast.error("Faça o login para continuar");
            //     return Promise.reject("No token provided");
            // }

            // const loginResponse = await sendLoginRequest(hashPassword);

            // if(loginResponse) {
            //     const token = useToken.getState().token;
            //     config.headers['Authorization'] = `Bearer ${token}`;
            // } else {
            //     toast.error("Ouve algum erro no login");
            //     return Promise.reject("No token provided");
            // }
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);