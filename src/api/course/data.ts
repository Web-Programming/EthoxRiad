import { CourseModel } from "./model";

const coursesData: CourseModel[] = [
  {
    id: 1,
    code: "IF184504",
    name: "Pemrograman Berbasis Web",
    sks: 3,
    class: "IF-43-03",
    schedule: [
      {
        id: 1,
        day_id: 1,
        session_id: 1,
      },
      {
        id: 2,
        day_id: 2,
        session_id: 2,
      },
    ],
    lecturer_note: "Jangan lupa kerjakan tugasnya ya",
    status_id: 1,
  },
  {
    id: 2,
    code: "IF184505",
    name: "Pemrograman Berbasis Mobile",
    sks: 3,
    class: "IF-43-03",
    schedule: [
      {
        id: 3,
        day_id: 3,
        session_id: 3,
      },
      {
        id: 4,
        day_id: 4,
        session_id: 4,
      },
    ],
    lecturer_note: "Jangan lupa kerjakan tugasnya ya",
    status_id: 1,
  },
  {
    id: 3,
    code: "IF184506",
    name: "Pemrograman Berbasis Desktop",
    sks: 3,
    class: "IF-43-03",
    schedule: [
      {
        id: 5,
        day_id: 5,
        session_id: 5,
      },
      {
        id: 6,
        day_id: 6,
        session_id: 6,
      },
    ],
    lecturer_note: "Jangan lupa kerjakan tugasnya ya",
    status_id: 1,
  },
  {
    id: 4,
    code: "IF184507",
    name: "Pemrograman Berbasis Enterprise",
    sks: 3,
    class: "IF-43-03",
    schedule: [
      {
        id: 7,
        day_id: 7,
        session_id: 7,
      },
      {
        id: 8,
        day_id: 1,
        session_id: 8,
      },
    ],
    lecturer_note: "Jangan lupa kerjakan tugasnya ya",
    status_id: 1,
  },
  {
    id: 5,
    code: "IF184508",
    name: "Pemrograman Berbasis Cloud",
    sks: 3,
    class: "IF-43-03",
    schedule: [
      {
        id: 9,
        day_id: 2,
        session_id: 9,
      },
      {
        id: 10,
        day_id: 3,
        session_id: 10,
      },
    ],
    lecturer_note: "Jangan lupa kerjakan tugasnya ya",
    status_id: 1,
  },
];

export default coursesData;
