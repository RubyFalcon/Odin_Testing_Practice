export default function caesarCipher(str, n) {
    return str.split("").map(char => {
        if (!/[a-zA-Z]/.test(char)) return char;

        const isUpper = char === char.toUpperCase();
        const base = isUpper ? 65 : 97;
        const shifted = ((char.charCodeAt(0) - base + n) % 26 + 26) % 26;

        return String.fromCharCode(base + shifted);
    }).join("");
}
