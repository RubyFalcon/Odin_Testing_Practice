import reverse from "../src/reverse"

describe("reverse function", ()=> {
    test("reverses a string", () => {
        expect(reverse("john")).toBe("nhoj")
    })
    test("reverses a number",()=> {
        expect(reverse(123)).toBe(321)
    })

    test("returns the empty string",() => {
        expect(reverse("")).toBe("")
    })
})