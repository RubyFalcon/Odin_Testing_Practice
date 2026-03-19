export default function reverse(input) {
    if (typeof input === 'number') {
        return Number(String(input).split("").reverse().join(""));
    }
    if (input === "") return ""
    return input.split('').reverse().join('')
}