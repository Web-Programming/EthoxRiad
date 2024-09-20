import coursesData from "./data";

const getCourses = () => {
  return coursesData;
};

const getCourseById = (id: number) => {
  return coursesData.find((course) => course.id === id);
};

export { getCourses, getCourseById };
