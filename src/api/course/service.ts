import { coursesData, selectedCourseData } from "./data";

const getCourses = () => coursesData;

const getSelectedCourses = () => selectedCourseData;

const getCourseById = (id: number) =>
  coursesData.find((course) => course.id === id);

export { getCourses, getSelectedCourses, getCourseById };
