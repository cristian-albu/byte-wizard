import chapters from "@/app/lib/chapters/chapters";
import { Params } from "../types";

export const getChapterAndLessonIndexes = (params: Params): number[] => {
    const currentChapterIndex = chapters.findIndex(function (lesson) {
        return lesson.chapterLink === params.slug;
    });
    const currentLessonIndex = chapters[currentChapterIndex].chapters.findIndex(function (lesson) {
        return lesson.link === params.lesson;
    });

    return [currentChapterIndex, currentLessonIndex];
};

export const getPreviousLessonLink = (params: Params): string => {
    let [chapterIndex, lessonIndex] = getChapterAndLessonIndexes(params);
    if (lessonIndex === 0) chapterIndex--;
    if (chapterIndex < 0) return "";
    lessonIndex === 0 ? (lessonIndex = chapters[chapterIndex].chapters.length - 1) : lessonIndex--;

    return `/front-end-bootcamp/${chapters[chapterIndex].chapterLink}/${chapters[chapterIndex].chapters[lessonIndex].link}`;
};

export const getNextLessonLink = (params: Params): string => {
    let [chapterIndex, lessonIndex] = getChapterAndLessonIndexes(params);
    lessonIndex === chapters[chapterIndex].chapters.length - 1 ? ((lessonIndex = 0), chapterIndex++) : lessonIndex++;
    if (chapterIndex > chapters.length - 1) return "";

    return `/front-end-bootcamp/${chapters[chapterIndex].chapterLink}/${chapters[chapterIndex].chapters[lessonIndex].link}`;
};
