import { toast } from 'react-toastify';
import { axiosClient } from '../../network/appClient';

export default async function requestAvailabilitySchedules(waveId : number) : Promise<string[]> {
    const rawResponse = await axiosClient.get(
        '/availability/availabilitySchedules',
        {
            params: {
                waveId
            }
        }
    );

    if (rawResponse.status === 200) {
        const data : Array<string> = rawResponse.data;

        return data;
    }

    toast.error("Ouve um erro ao verificar os horarios disponíveis");
    throw new Error("requestAvailabilitySchedules Error");
};