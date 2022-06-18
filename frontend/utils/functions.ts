export const getNumberSuffix = (number: string | number) => {
    if(typeof number === 'number') number = number.toString();

    let suffix;
    switch(number.substring(-1)) {
        case '1':
            suffix = 'st';
            break;
        case '2':
            suffix = 'nd';
            break;
        case '3':
            suffix = 'rd';
            break;
        default:
            suffix = 'th';
    }
    return suffix;
}
const months = [
    'Jan', 'Feb', 'Mar', 
    'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sep', 
    'Oct', 'Nov', 'Dec'
]
export const getReadableTime = (timestamp: string, exact?: boolean) => {
    const time = new Date(parseInt(timestamp));
    const year = time.getFullYear();
    const month = time.getMonth();
    const date = time.getDate();
    const dateSuffix = getNumberSuffix(date);

    // Creating and returning date string if not exact
    let dateString = `${months[month]} ${date}${dateSuffix}, ${year}`
    if(!exact) return dateString;

    // Else add clock time to dateString
    let hours = time.getHours();
    let minutes: string | number = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // AM/PM Calculations
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;

    dateString += `, ${hours}:${minutes} ${ampm}`;
    return dateString;
}

export const firstLetterUppercase = (string: string) => {
    return string[0].toUpperCase() + string.slice(1);
}