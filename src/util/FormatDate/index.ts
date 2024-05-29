export function formatDate(date: string, withBar = false) {
    // Dividir a string de data em ano, mês e dia
    const [year, month, day] = date.split('-');
    
    // Garantir que o dia e o mês tenham dois dígitos
    const formattedDay = day.padStart(2, '0');
    const formattedMonth = month.padStart(2, '0');
    
    // Formatar a data de acordo com o parâmetro withBar
    if (withBar) {
        return `${formattedDay}/${formattedMonth}/${year}`;
    } else {
        return `${formattedDay}.${formattedMonth}.${year.slice(-2)}`;
    }
}