import { SelectedCourseLocalStorageModel } from "@models/course";

export const selectedCourseData: SelectedCourseLocalStorageModel[] = JSON.parse(
  localStorage.getItem("selectedCourseData") || "[]",
);
