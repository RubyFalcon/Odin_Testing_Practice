import calculator from "../src/calculator"

describe("Calculator object", ()=> {
    test("add's two numbers", ()=>{
        expect(calculator.add(2,3)).toEqual(5)
    })

    test("add's floating point number",() => {
        expect(calculator.add(1.1, 1.2)).toEqual(2.3)
    })

    test("add's fractional number", ()=> {
        expect(calculator.add(1/3, 2/3)).toEqual(1)
    })

    test("Adds only number type", ()=>{
        expect(calculator.add("a","b")).toBeUndefined()
    })
})

describe("Calculator subtract", () => {
    test("subtracts two numbers", () => {
        expect(calculator.subtract(10, 4)).toEqual(6)
    })

    test("subtracts floating point numbers", () => {
        expect(calculator.subtract(2.5, 1.1)).toEqual(1.4)
    })

    test("subtracts only number type", () => {
        expect(calculator.subtract("a", "b")).toBeUndefined()
    })
})

describe("Calculator multiply", () => {
    test("multiplies two numbers", () => {
        expect(calculator.multiply(3, 4)).toEqual(12)
    })

    test("multiplies floating point numbers", () => {
        expect(calculator.multiply(2.5, 2)).toEqual(5)
    })

    test("multiplies only number type", () => {
        expect(calculator.multiply("a", 3)).toBeUndefined()
    })
})

describe("Calculator divide", () => {
    test("divides two numbers", () => {
        expect(calculator.divide(10, 2)).toEqual(5)
    })

    test("divides floating point numbers", () => {
        expect(calculator.divide(7.5, 2.5)).toEqual(3)
    })

    test("divides only number type", () => {
        expect(calculator.divide("a", 2)).toBeUndefined()
    })

    test("returns error message when dividing by zero", () => {
        expect(calculator.divide(10, 0)).toEqual("Cannot divide by Zero")
    })
})
