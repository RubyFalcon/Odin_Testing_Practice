

export default function capitalize(input) {
    if ( typeof input !== "string" || input === "" ) return undefined;
    return input.charAt(0).toUpperCase() + input.slice(1)
}