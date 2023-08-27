export default function slugify(input: string): string {
    return input
        .toLowerCase() // Convert to lowercase
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/[^\w\-]+/g, "") // Remove non-word characters except hyphens
        .replace(/\-\-+/g, "-") // Replace multiple hyphens with a single hyphen
        .replace(/^-+|-+$/g, ""); // Remove hyphens from the beginning and end
}

console.log(slugify("Algorithms & Data Structures I: Arrays"));
