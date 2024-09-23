import { ScheduleModel } from "../schedule/model";

export type CourseModel = {
  id: number;
  code: string;
  semester_id: number;
  name: string;
  sks: number;
  class: string;
  capacity: number;
  schedule: ScheduleModel[];
};

export type SelectedCourseModel = {
  course: CourseModel;
  lecturer_note?: string;
  status_id: number;
};
