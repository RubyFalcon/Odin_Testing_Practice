

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