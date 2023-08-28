import { Params } from "../types";
import { getChapterAndLessonIndexes, getNextLessonLink, getPreviousLessonLink } from "./lessonNavigation";

jest.mock("../chapters/chapters", () => ({
    __esModule: true,
    default: [
        {
            chapterLink: "workspace-setup",
            chapterImage: "",
            chapters: [
                {
                    link: "install-node-yarn",
                },
                {
                    link: "linux-and-bash",
                },
                {
                    link: "git-and-github",
                },
                {
                    link: "chrome-and-local",
                },
            ],
        },
        {
            chapterLink: "basic-javascript",
            chapters: [
                {
                    link: "what-is-js-introduction",
                },
                {
                    link: "history-of-js-brief",
                },
            ],
        },
    ],
}));

describe("Lesson Navigation Functions", () => {
    const params: Params = { slug: "workspace-setup", lesson: "chrome-and-local" };

    describe("getChapterAndLessonIndexes", () => {
        test("getChapterAndLessonIndexes should return correct indexes", () => {
            const [chapterIndex, lessonIndex] = getChapterAndLessonIndexes(params);
            expect(chapterIndex).toEqual(0);
            expect(lessonIndex).toEqual(3);
        });

        test("getChapterAndLessonIndexes should return correct indexes case 2", () => {
            const params: Params = { slug: "basic-javascript", lesson: "history-of-js-brief" };
            const [chapterIndex, lessonIndex] = getChapterAndLessonIndexes(params);
            expect(chapterIndex).toEqual(1);
            expect(lessonIndex).toEqual(1);
        });
    });
    describe("getPreviousLessonLink", () => {
        test("getPreviousLessonLink should return correct link", () => {
            const link = getPreviousLessonLink(params);
            expect(link).toBe("/front-end-bootcamp/workspace-setup/git-and-github");
        });

        test("getPreviousLessonLink should return correct link between chapters", () => {
            const params: Params = { slug: "basic-javascript", lesson: "what-is-js-introduction" };
            const link = getPreviousLessonLink(params);
            expect(link).toBe("/front-end-bootcamp/workspace-setup/chrome-and-local");
        });

        test("getPreviousLessonLink should return empty", () => {
            const params: Params = { slug: "workspace-setup", lesson: "install-node-yarn" };
            const link = getPreviousLessonLink(params);
            expect(link).toBe("");
        });
    });

    describe("getNextLessonLink", () => {
        test("getNextLessonLink should return correct link between chapters", () => {
            const link = getNextLessonLink(params);
            expect(link).toBe("/front-end-bootcamp/basic-javascript/what-is-js-introduction");
        });

        test("getNextLessonLink should return correct link", () => {
            const params: Params = { slug: "basic-javascript", lesson: "what-is-js-introduction" };
            const link = getNextLessonLink(params);
            expect(link).toBe("/front-end-bootcamp/basic-javascript/history-of-js-brief");
        });

        test("getNextLessonLink should return empty", () => {
            const params: Params = { slug: "basic-javascript", lesson: "history-of-js-brief" };
            const link = getNextLessonLink(params);
            expect(link).toBe("");
        });
    });
});
