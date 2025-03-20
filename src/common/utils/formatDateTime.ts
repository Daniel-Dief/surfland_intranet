/**
 * Adiciona um zero à esquerda se o número for menor que 10
 * @param num Número a ser formatado
 * @returns String do número com zero à esquerda se necessário
 */
function padZero(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}
  
/**
 * Formata a data no padrão dd/mm/aaaa
 * @param date Objeto Date a ser formatado
 * @returns String no formato dd/mm/aaaa
 */
function formatDateDDMMYYYY(date: Date): string {
  const day = padZero(date.getDate());
  const month = padZero(date.getMonth() + 1); // getMonth() retorna 0-11
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

/**
 * Formata a data no padrão dd/mm
 * @param date Objeto Date a ser formatado
 * @returns String no formato dd/mm
 */
function formatDateDDMM(date: Date): string {
  const day = padZero(date.getDate());
  const month = padZero(date.getMonth() + 1);

  return `${day}/${month}`;
}

/**
 * Formata a hora no padrão hh:mm:ss
 * @param date Objeto Date a ser formatado
 * @returns String no formato hh:mm:ss
 */
function formatTimeHHMMSS(date: Date): string {
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  const seconds = padZero(date.getSeconds());

  return `${hours}:${minutes}:${seconds}`;
}

/**
 * Formata a hora no padrão hh:mm
 * @param date Objeto Date a ser formatado
 * @returns String no formato hh:mm
 */
function formatTimeHHMM(date: Date): string {
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());

  return `${hours}:${minutes}`;
}

/**
 * Formata a data e hora no padrão dd/mm/aaaa - hh:mm:ss
 * @param date Objeto Date a ser formatado
 * @returns String no formato dd/mm/aaaa - hh:mm:ss
 */
function formatDateTimeComplete(date: Date): string {
  return `${formatDateDDMMYYYY(date)} - ${formatTimeHHMMSS(date)}`;
}

/**
 * Formata a data no padrão aaaa-mm-dd (ISO Date)
 * @param date Objeto Date a ser formatado
 * @returns String no formato aaaa-mm-dd
 */
function formatDateISO(date: Date): string {
  const day = padZero(date.getDate());
  const month = padZero(date.getMonth() + 1);
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
}

/**
 * Formata a data no padrão dia de mês de ano
 * @param date Objeto Date a ser formatado
 * @returns String no formato "1 de janeiro de 2025"
 */
function formatDateLong(date: Date): string {
  const day = date.getDate();
  const monthNames = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${day} de ${month} de ${year}`;
}

/**
 * Formata a data e hora de forma relativa (hoje, ontem, etc)
 * @param date Objeto Date a ser formatado
 * @returns String com data relativa
 */
function formatRelativeDate(date: Date): string {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dateWithoutTime = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  const diffTime = today.getTime() - dateWithoutTime.getTime();
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return `Hoje, ${formatTimeHHMM(date)}`;
  } else if (diffDays === 1) {
    return `Ontem, ${formatTimeHHMM(date)}`;
  } else if (diffDays === -1) {
    return `Amanhã, ${formatTimeHHMM(date)}`;
  } else if (diffDays > 1 && diffDays < 7) {
    return `Há ${diffDays} dias, ${formatTimeHHMM(date)}`;
  } else if (diffDays < -1 && diffDays > -7) {
    return `Em ${Math.abs(diffDays)} dias, ${formatTimeHHMM(date)}`;
  } else {
    return formatDateDDMMYYYY(date);
  }
}
  
export {
  formatDateDDMMYYYY,
  formatDateDDMM,
  formatTimeHHMMSS,
  formatTimeHHMM,
  formatDateTimeComplete,
  formatDateISO,
  formatDateLong,
  formatRelativeDate
};