import { toast } from 'react-toastify';
import { axiosClient } from '../../network/appClient';

export interface responseProps {
    message: string,
    ticketId?: number
}

export default async function requestScheduleSession(waveId : number, waveTime : string, waveDate : string) : Promise<responseProps> {
    const rawResponse = await axiosClient.post(
        '/availability/scheduleSession',
        {
            WaveId: waveId,
            WaveTime: waveTime,
            WaveDate: waveDate
        }
    );

    if (rawResponse.status === 200) {
        const data : responseProps = rawResponse.data;

        return data;
    }

    toast.error("Ouve um erro ao verificar as ondas disponíveis");
    throw new Error("requestAvailabilityWaves Error");
};