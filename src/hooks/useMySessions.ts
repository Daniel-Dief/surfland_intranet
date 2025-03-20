import requestMyWaves from '../services/tickets/myTickets.service';

export async function useMySessions(page : number) {
    const myTickets = await requestMyWaves();

    const iniIndex = (page - 1) * 10;
    const endIndex = iniIndex + 10;

    return {
        "status": 200,
        "tickets": myTickets.tickets.slice(iniIndex, endIndex),
        "totalPages": myTickets.totalPages
    }
};
