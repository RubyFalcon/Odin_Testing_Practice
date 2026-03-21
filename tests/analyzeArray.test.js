import analyzeArray from "../src/analyzeArray";

describe("analyzeArray", () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);

    test("returns the correct length", () => {
        expect(result.length).toEqual(6);
    });

    test("returns the correct minimum value", () => {
        expect(result.min).toEqual(1);
    });

    test("returns the correct maximum value", () => {
        expect(result.max).toEqual(8);
    });

    test("returns the correct average", () => {
        expect(result.average).toEqual(4);
    });

    test("returns all four properties", () => {
        expect(result).toEqual({ average: 4, min: 1, max: 8, length: 6 });
    });
});
