import { toast } from 'react-toastify';
import { axiosClient } from '../../network/appClient';

export interface responseProps {
    WaveDate: string,
    AvailabilityId: number
}

export default async function requestAvailabilityDates(waveId : number, waveTime: string) : Promise<responseProps[]> {
    const rawResponse = await axiosClient.post(
        '/availability/availabilityDates',
        {
            WaveId: waveId,
            WaveTime: waveTime
        }
    );

    if (rawResponse.status === 200) {
        const data : Array<responseProps> = rawResponse.data;

        return data;
    }

    toast.error("Ouve um erro ao verificar as datas disponíveis");
    throw new Error("requestAvailabilityDates Error");
};