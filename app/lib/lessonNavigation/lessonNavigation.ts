import chapters from "@/app/lib/chapters/chapters";
import { Params } from "../types";

export const getChapterAndLessonIndexes = (params: Params) => {
    const currentChapterIndex = chapters.findIndex(function (lesson) {
        return lesson.chapterLink === params.slug;
    });
    const currentLessonIndex = chapters[currentChapterIndex].chapters.findIndex(function (lesson) {
        return lesson.link === params.lesson;
    });
    return [currentChapterIndex, currentLessonIndex];
};

export const getPreviousLessonLink = (params: Params) => {
    let [chapterIndex, lessonIndex] = getChapterAndLessonIndexes(params);
    if (lessonIndex === 0) chapterIndex--;
    if (chapterIndex < 0) return "";
    lessonIndex === 0 ? (lessonIndex = chapters[chapterIndex].chapters.length - 1) : lessonIndex--;
    return `/front-end-bootcamp/${chapters[chapterIndex].chapterLink}/${chapters[chapterIndex].chapters[lessonIndex].link}`;
};

export const getNextLessonLink = (params: Params) => {
    let [chapterIndex, lessonIndex] = getChapterAndLessonIndexes(params);
    if (lessonIndex === chapters[chapterIndex].chapters.length - 1) chapterIndex++;
    if (chapterIndex > chapters.length - 1) return "";
    chapters[chapterIndex - 1] && lessonIndex === chapters[chapterIndex - 1].chapters.length - 1
        ? (lessonIndex = 0)
        : lessonIndex++;
    return `/front-end-bootcamp/${chapters[chapterIndex].chapterLink}/${chapters[chapterIndex].chapters[lessonIndex].link}`;
};
