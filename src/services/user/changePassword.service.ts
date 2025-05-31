import { toast } from 'react-toastify';
import { axiosClient } from '../../network/appClient';

interface Props {
    oldPassword: string,
    newPassword: string,
    confirmPassword: string
}

export default async function sendChangePasswordRequest( { oldPassword, newPassword, confirmPassword } : Props ) : Promise<true | undefined> {
    const rawResponse = await axiosClient.patch(
        '/user/changePassword',
        {
            oldPassword,
            newPassword,
            confirmPassword
        }
    );

    if (rawResponse.status === 200) {
        return true
    }

    if (rawResponse.status === 401) {
        toast.error("Login ou senha inválidos");
        throw new Error("Login ou senha inválidos");
    }
};