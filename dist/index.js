export function add(...numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
