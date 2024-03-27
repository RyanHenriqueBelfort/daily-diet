export function formatDate(date: string, withBar = false) {
    const parsedDate = new Date(date);
    const year = parsedDate.getFullYear();
    const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0');
    const day = parsedDate.getDate().toString().padStart(2, '0');

    if (withBar) {
        const formattedDate = `${day}/${month}/${year.toString()}`;
        return formattedDate
    }

    const formattedDate = `${day}.${month}.${year.toString().slice(-2)}`;
    return formattedDate;
}