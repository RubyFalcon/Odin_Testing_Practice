import capitalize from "../src/capitalize"
describe("Capitalize function", ()=> {
    test("Capitalizes first char" , () => {
    expect(capitalize("tupay")).toBe("Tupay")
})
    test("doesn't take an empty string", ()=>{
        expect(capitalize("")).toBeUndefined()
    })

    test("doesn't take non-string parameters",()=> {
        expect(capitalize(156332)).toBeUndefined()
    })
})

