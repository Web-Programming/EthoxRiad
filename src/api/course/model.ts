import { ScheduleModel } from "../schedule/model";

export type CourseModel = {
  id: number;
  code: string;
  name: string;
  sks: number;
  class: string;
  schedule: ScheduleModel[];
  lecturer_note: string;
  status_id: number;
};
