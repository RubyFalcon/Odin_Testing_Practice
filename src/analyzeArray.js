const analyzeArray = (arr) => {
    const length = arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const average = arr.reduce((sum, n) => sum + n, 0) / length;

    return { average, min, max, length };
};

export default analyzeArray;
