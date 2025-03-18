import { toast } from 'react-toastify';
import { axiosClient } from '../../network/appClient';

interface responseProps {
    user: {
        UserId: number,
        Name: string,
        Login: string,
        AccessProfileId: number,
        StatusId: number
    },
    token: string
}

export default async function sendLoginRequest( hashPassword : string ) : Promise<responseProps | undefined> {
    const rawResponse = await axiosClient.post(
        '/login',
        {hashPassword}
    );

    if (rawResponse.status === 200) {
        const userInfo = rawResponse.data.user;
        const token = rawResponse.data.token;
    
        toast.success("Bem vindo " + userInfo.Name.split(' ')[0] + "!");
        return {
            user: {
                UserId: userInfo.UserId,
                Name: userInfo.Name,
                Login: userInfo.Login,
                AccessProfileId: userInfo.AccessProfileId,
                StatusId: userInfo.StatusId
            },
            token: token
        }
    }

    if (rawResponse.status === 401) {
        toast.error("Login ou senha inválidos");
        throw new Error("Login ou senha inválidos");
    }
};