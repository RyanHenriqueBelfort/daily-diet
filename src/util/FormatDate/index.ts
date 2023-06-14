// type props = {
//     date: string
// }

export function formatDate() {
    const year = new Date().getFullYear()
    let month = new Date().getMonth() + 1
    const day = new Date().getDate()

    if(month !== 10 && month !== 11 && month !== 12) {
        month = '0' + String(month)
    }

    const string = `${day}.${month}.${String(year).substring(2)}`
    return string
}