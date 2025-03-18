import { toast } from 'react-toastify';
import { axiosClient } from '../../network/appClient';

export default async function requestMyWaves() {
    const rawResponse = await axiosClient.get(
        '/tickets/myTickets',
    );

    if (rawResponse.status === 200) {
        const data = rawResponse.data;

        console.log(data);

        return data;
    }

    toast.error("Ouve um erro ao resgatas as suas ondas");
    throw new Error("requestMyWaves Error");
};