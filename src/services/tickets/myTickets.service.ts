import { toast } from 'react-toastify';
import { axiosClient } from '../../network/appClient';

interface responseProps {
    tickets: Array<TicketsProps>,
    totalPages: number
}

interface TicketsProps {
    TicketId: string,
    Wave: string,
    WaveDate: string,
    WaveTime: string,
    CreatedAt: string,
    Status: string,
}

export default async function requestMyTickets() : Promise<responseProps> {
    const rawResponse = await axiosClient.get(
        '/tickets/myTickets',
    );

    if (rawResponse.status === 200) {
        const data : Array<TicketsProps> = rawResponse.data;

        return {
            tickets: data,
            totalPages: Math.ceil(data.length / 10) + 1
        }
    }

    toast.error("Ouve um erro ao resgatas as suas sessões");
    throw new Error("requestMyTickets Error");
};