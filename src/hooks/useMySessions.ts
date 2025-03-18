import requestMyWaves from '../services/waves/myWaves.service';

export async function useMySessions(page : number) {
    const myTickets = await requestMyWaves();

    const iniIndex = (page - 1) * 10;
    const endIndex = iniIndex + 10;

    return {
        "status": 200,
        "data": myTickets.slice(iniIndex, endIndex),
        "totalPages": Math.ceil(10 / 10)
    }
};
