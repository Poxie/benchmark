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
export const getReadableTime = (timestamp: string) => {
    const time = new Date(parseInt(timestamp));
    const year = time.getFullYear();
    const month = time.getMonth();
    const date = time.getDate();
    const dateSuffix = getNumberSuffix(date);

    return `${months[month]} ${date}${dateSuffix}, ${year}`;
}