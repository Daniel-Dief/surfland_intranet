import styled from 'styled-components';

export const CalendarWrapper = styled.div`
    min-width: calc(100% / 3);
    max-width: calc(100% / 2);
    overflow: hidden;
    border: 1px solid #000;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    
    .rdp-root {
        --rdp-accent-color: #FFCF00;
        --rdp-day_button-border-radius: 15px;
    }

    .rdp-root, .rdp-months, .rdp-month {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .rdp-month {
        flex-direction: column;
    }

    .rdp-month_caption {
        width: 100%;
        font-size: 2rem;
    }

    .rdp-month_grid {
        font-size: 1.3rem;
    }

    .rdp-day {
        padding: .3rem .5rem;
    }
`;