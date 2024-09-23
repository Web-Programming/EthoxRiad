import { coursesData } from "./data";
import {
  CourseModel,
  SelectedCourseLocalStorageModel,
  SelectedCourseModel,
} from "./model";

const selectedCourseData: SelectedCourseLocalStorageModel[] = JSON.parse(
  localStorage.getItem("selectedCourseData") || "[]",
);

const getCourses = (keyword: string): CourseModel[] => {
  return coursesData.filter((course) => {
    return (
      course.name.toLowerCase().includes(keyword.toLowerCase()) ||
      course.code.toLowerCase().includes(keyword.toLowerCase())
    );
  });
};

const getSelectedCourses = (): SelectedCourseModel[] => {
  return selectedCourseData.map(
    (
      selectedCourseData: SelectedCourseLocalStorageModel,
    ): SelectedCourseModel => ({
      course: getCourseById(selectedCourseData.course_id),
      lecturer_note: selectedCourseData.lecturer_note,
      status_id: selectedCourseData.status_id,
    }),
  );
};

const getCourseDataStatus = (courseId: number): number => {
  const courseData = selectedCourseData.find(
    (data: SelectedCourseLocalStorageModel) => {
      return data.course_id === courseId;
    },
  );

  return courseData ? courseData.course_id : 4;
};

const getCourseById = (id: number): CourseModel => {
  const course = coursesData.find((course) => course.id === id);
  if (!course) {
    throw new Error(`Course with id ${id} not found`);
  }
  return course;
};

export { getCourses, getSelectedCourses, getCourseDataStatus, getCourseById };
