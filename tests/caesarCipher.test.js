import caesarCipher from "../src/caesarCipher"

describe("caesarCipher", () => {
    test("shifts characters by a given factor", () => {
        expect(caesarCipher("abc", 3)).toEqual("def")
    })

    test("wraps around the alphabet", () => {
        expect(caesarCipher("xyz", 3)).toEqual("abc")
    })

    test("preserves the original lettercase", () => {
        expect(caesarCipher("HeLLo", 3)).toEqual("KhOOr")
    })

    test("leaves punctuation and spaces unchanged", () => {
        expect(caesarCipher("Hello, World!", 3)).toEqual("Khoor, Zruog!")
    })

    test("leaves numbers unchanged", () => {
        expect(caesarCipher("abc123", 3)).toEqual("def123")
    })

    test("shifts characters left with a negative factor", () => {
        expect(caesarCipher("def", -3)).toEqual("abc")
    })

    test("wraps around the alphabet with a negative factor", () => {
        expect(caesarCipher("abc", -3)).toEqual("xyz")
    })
})
