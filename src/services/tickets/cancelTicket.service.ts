import { toast } from 'react-toastify';
import { axiosClient } from '../../network/appClient';

export interface responseProps {
    message: string,
    ticketId: number
}

export default async function requestCancelTicket(ticketId : number) : Promise<responseProps> {
    const rawResponse = await axiosClient.post(
        '/tickets/cancelTicket',
        {
            TicketId: ticketId
        }
    );

    if (rawResponse.status === 200) {
        const data : responseProps = rawResponse.data;

        return data;
    }

    toast.error("Ouve um erro ao verificar as ondas disponíveis");
    throw new Error("requestAvailabilityWaves Error");
};