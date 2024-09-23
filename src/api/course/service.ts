import { coursesData, selectedCourseData } from "./data";

const getCourses = () => {
  return coursesData;
};

const getSelectedCourses = () => {
  return selectedCourseData;
};

const getCourseById = (id: number) => {
  return coursesData.find((course) => course.id === id);
};

export { getCourses, getSelectedCourses, getCourseById };
