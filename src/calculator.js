const calculator = {
    add(a, b) {
        if (typeof a !== "number" || typeof b !== "number") return undefined;
        return parseFloat((a + b).toFixed(1));
    },

    subtract(a, b) {
        if (typeof a !== "number" || typeof b !== "number") return undefined;
        return parseFloat((a - b).toFixed(1));
    },

    multiply(a, b) {
        if (typeof a !== "number" || typeof b !== "number") return undefined;
        return parseFloat((a * b).toFixed(1));
    },

    divide(a, b) {
        if (typeof a !== "number" || typeof b !== "number") return undefined;
        if (b === 0) return "Cannot divide by Zero";
        return parseFloat((a / b).toFixed(1));
    }
};

export default calculator;
