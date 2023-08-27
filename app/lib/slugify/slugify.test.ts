import slugify from "./slugify";

describe("slugify", () => {
    it("should convert spaces to hyphens", () => {
        const input = "Hello World";
        const expected = "hello-world";
        const result = slugify(input);
        expect(result).toBe(expected);
    });

    it("should remove special characters", () => {
        const input = "It's a sunny day!";
        const expected = "its-a-sunny-day";
        const result = slugify(input);
        expect(result).toBe(expected);
    });

    it("should handle multiple hyphens", () => {
        const input = "a   b c";
        const expected = "a-b-c";
        const result = slugify(input);
        expect(result).toBe(expected);
    });

    it("should remove hyphens from the beginning and end", () => {
        const input = "-testing-";
        const expected = "testing";
        const result = slugify(input);
        expect(result).toBe(expected);
    });

    it("should handle mixed case input", () => {
        const input = "CamelCase Example";
        const expected = "camelcase-example";
        const result = slugify(input);
        expect(result).toBe(expected);
    });

    it("should handle empty input", () => {
        const input = "";
        const expected = "";
        const result = slugify(input);
        expect(result).toBe(expected);
    });
});
