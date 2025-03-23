import { toast } from 'react-toastify';
import { axiosClient } from '../../network/appClient';

export interface responseProps {
    WaveId: Number,
    Name: string
}

export default async function requestAvailabilityWaves() : Promise<responseProps[]> {
    const rawResponse = await axiosClient.get(
        '/availability/availabilityWaves',
    );

    if (rawResponse.status === 200) {
        const data : Array<responseProps> = rawResponse.data;

        return data;
    }

    toast.error("Ouve um erro ao verificar as ondas disponíveis");
    throw new Error("requestAvailabilityWaves Error");
};