import { CourseModel, SelectedCourseModel } from "./model";

const coursesData: CourseModel[] = [
  {
    id: 1,
    code: "IF184504",
    semester_id: 3,
    name: "Pemrograman Berbasis Web",
    sks: 3,
    class: "IF3A",
    capacity: 28,
    schedule: [
      {
        id: 1,
        day_id: 1,
        session_id: 1,
        room: "B603",
      },
      {
        id: 2,
        day_id: 2,
        session_id: 2,
        room: "B605",
      },
    ],
  },
  {
    id: 2,
    code: "IF184505",
    semester_id: 5,
    name: "Pemrograman Berbasis Mobile",
    sks: 3,
    class: "IF5A",
    capacity: 40,
    schedule: [
      {
        id: 3,
        day_id: 3,
        session_id: 3,
        room: "A301",
      },
      {
        id: 4,
        day_id: 4,
        session_id: 4,
        room: "B602",
      },
    ],
  },
  {
    id: 3,
    code: "IF184506",
    semester_id: 6,
    name: "Pemrograman Berbasis Desktop",
    sks: 3,
    class: "IF6A",
    capacity: 35,
    schedule: [
      {
        id: 5,
        day_id: 5,
        session_id: 5,
        room: "B608",
      },
      {
        id: 6,
        day_id: 6,
        session_id: 6,
        room: "A301",
      },
    ],
  },
  {
    id: 4,
    code: "IF184507",
    semester_id: 4,
    name: "Pemrograman Berbasis Enterprise",
    sks: 3,
    class: "IF4A",
    capacity: 30,
    schedule: [
      {
        id: 7,
        day_id: 7,
        session_id: 7,
        room: "B603",
      },
      {
        id: 8,
        day_id: 1,
        session_id: 8,
        room: "A301",
      },
    ],
  },
  {
    id: 5,
    code: "IF184508",
    semester_id: 2,
    name: "Pemrograman Berbasis Cloud",
    sks: 3,
    class: "IF2A",
    capacity: 25,
    schedule: [
      {
        id: 9,
        day_id: 2,
        session_id: 9,
        room: "A301",
      },
      {
        id: 10,
        day_id: 3,
        session_id: 10,
        room: "B604",
      },
    ],
  },
  {
    id: 6,
    code: "IF184505",
    semester_id: 5,
    name: "Pemrograman Berbasis Mobile",
    sks: 3,
    class: "IF5B",
    capacity: 6,
    schedule: [
      {
        id: 3,
        day_id: 3,
        session_id: 3,
        room: "A302",
      },
      {
        id: 4,
        day_id: 4,
        session_id: 4,
        room: "B605",
      },
    ],
  },
];

const selectedCourseData: SelectedCourseModel[] = [
  {
    course: coursesData[0],
    lecturer_note: "Tidak ada catatan",
    status_id: 1,
  },
  {
    course: coursesData[1],
    lecturer_note: "Tidak ada catatan",
    status_id: 2,
  },
  {
    course: coursesData[2],
    lecturer_note: "Tidak ada catatan",
    status_id: 3,
  },
  {
    course: coursesData[3],
    lecturer_note: "Tidak ada catatan",
    status_id: 1,
  },
  {
    course: coursesData[4],
    lecturer_note: "Tidak ada catatan",
    status_id: 2,
  },
];

export { coursesData, selectedCourseData };
