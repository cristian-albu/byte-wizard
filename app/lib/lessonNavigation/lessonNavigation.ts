import chapters, { lessonList } from "@/app/lib/chapters/chapters";
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
    const currLessonIndex = lessonList.findIndex(function (lesson) {
        return lesson.lesson === params.lesson;
    });

    if (currLessonIndex === 0) return "";
    return `/front-end-bootcamp/${lessonList[currLessonIndex - 1].chapter}/${lessonList[currLessonIndex - 1].lesson}`;
};

export const getNextLessonLink = (params: Params): string => {
    const currLessonIndex = lessonList.findIndex(function (lesson) {
        return lesson.lesson === params.lesson;
    });

    if (currLessonIndex === lessonList.length - 1) return "";
    return `/front-end-bootcamp/${lessonList[currLessonIndex + 1].chapter}/${lessonList[currLessonIndex + 1].lesson}`;
};
