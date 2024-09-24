import { coursesData } from "./data";
import {
  CourseModel,
  SelectedCourseLocalStorageModel,
  SelectedCourseModel,
} from "./model";
import studentData from "../student/data";
import { dayName, sessionName } from "@utils/consts";
import toast from "react-hot-toast";
import { ScheduleModel } from "../schedule/model";

const selectedCourseData: SelectedCourseLocalStorageModel[] = JSON.parse(
  localStorage.getItem("selectedCourseData") || "[]",
);

const getCourses = (keyword: string): CourseModel[] => {
  if (!keyword || keyword === "" || keyword.length < 3) {
    return [];
  }

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

const joinCourse = (courseId: number): boolean => {
  const courseData = getCourseById(courseId);

  const isCourseExist = selectedCourseData.find(
    (data) => data.course_id === courseId,
  );
  if (isCourseExist) {
    toast.error("Mata kuliah sudah ada di daftar");
    return false;
  }

  const totalCurrentSKS = selectedCourseData.reduce((acc, data) => {
    return acc + getCourseById(data.course_id).sks;
  }, 0);

  const isSelectedCourseWillExceedMaxSKS =
    totalCurrentSKS + courseData.sks > studentData.max_sks;
  if (isSelectedCourseWillExceedMaxSKS) {
    toast.error(
      `Total SKS melampaui batas apabila mengambil mata kuliah ini (${totalCurrentSKS + courseData.sks}/${studentData.max_sks}). Maksimal SKS yang dapat anda ambil adalah ${studentData.max_sks}`,
    );
    return false;
  }

  const isSameCourseAlreadyTaken = selectedCourseData.some((data) => {
    return getCourseById(data.course_id).code === courseData.code;
  });
  if (isSameCourseAlreadyTaken) {
    const takenCourse = selectedCourseData.find((data) => {
      return getCourseById(data.course_id).code === courseData.code;
    });

    if (takenCourse) {
      const takenCourseClass = getCourseById(takenCourse.course_id).class;
      toast.error(
        `Mata kuliah "${courseData.name}" sudah diambil sebelumnya dengan kelas "${takenCourseClass}"`,
      );
    } else {
      toast.error(`Mata kuliah "${courseData.name}" sudah diambil sebelumnya`);
    }
    return false;
  }

  const isCourseScheduleConflict = selectedCourseData.some((data) => {
    const selectedCourseSchedule = getCourseById(data.course_id).schedule.map(
      (schedule) => {
        return `${dayName[schedule.day_id]}, ${sessionName[schedule.session_id]}`;
      },
    );
    const courseSchedule = courseData.schedule.map((schedule) => {
      return `${dayName[schedule.day_id]}, ${sessionName[schedule.session_id]}`;
    });

    const conflict = selectedCourseSchedule.find((schedule) =>
      courseSchedule.includes(schedule),
    );
    if (conflict) {
      const conflictingCourse = getCourseById(data.course_id);
      toast.error(
        `Jadwal mata kuliah bentrok dengan mata kuliah "${conflictingCourse.name}" (${conflict})`,
      );
      return true;
    }

    return false;
  });
  if (isCourseScheduleConflict) {
    return false;
  }

  selectedCourseData.push({
    course_id: courseId,
    status_id: 1,
    lecturer_note: "",
  });

  localStorage.setItem(
    "selectedCourseData",
    JSON.stringify(selectedCourseData),
  );

  toast.success(`Berhasil masuk kelas mata kuliah "${courseData.name}"`);
  return true;
};

const leaveCourse = (courseId: number): boolean => {
  const courseData = getCourseById(courseId);

  const courseIndex = selectedCourseData.findIndex(
    (data) => data.course_id === courseId,
  );
  if (courseIndex === -1) {
    toast.error("Mata kuliah tidak ditemukan");
    return false;
  }

  selectedCourseData.splice(courseIndex, 1);

  localStorage.setItem(
    "selectedCourseData",
    JSON.stringify(selectedCourseData),
  );
  toast.success(`Berhasil keluar kelas mata kuliah "${courseData.name}"`);
  return true;
};

const getCourseDataStatus = (courseId: number): number => {
  const courseData = selectedCourseData.find(
    (data: SelectedCourseLocalStorageModel) => {
      return data.course_id === courseId;
    },
  );

  return courseData ? courseData.status_id : 4; // Assuming 4 is the default status_id
};

const getCourseById = (id: number): CourseModel => {
  const course = coursesData.find((course) => course.id === id);
  if (!course) {
    throw new Error(`Mata kuliah dengan id ${id} tidak ditemukan`);
  }
  return course;
};

const getCurrentSKS = (): number => {
  return selectedCourseData.reduce((acc, data) => {
    return acc + getCourseById(data.course_id).sks;
  }, 0);
};

const getCoursesForDay = (
  selectedCourses: SelectedCourseModel[],
  dayIndex: number,
) => {
  return selectedCourses
    .filter((course) =>
      course.course.schedule.some((schedule) => schedule.day_id === dayIndex),
    )
    .map((course) => ({
      ...course,
      schedule: course.course.schedule.filter(
        (schedule) => schedule.day_id === dayIndex,
      ),
    }))
    .sort((a, b) => a.schedule[0].session_id - b.schedule[0].session_id);
};

const getScheduleByDayAndSession = (
  schedule: ScheduleModel[],
  dayId: number,
  sessionId: number,
) => {
  return schedule.find(
    (schedule) =>
      schedule.day_id === dayId && schedule.session_id === sessionId,
  );
};

const getRegularSchedule = () => {
  const selectedCourses = getSelectedCourses();

  const flattenedSchedules = selectedCourses.flatMap((item) =>
    item.course.schedule.map((schedule) => ({
      ...item,
      dayId: schedule.day_id,
      sessionId: schedule.session_id,
    })),
  );

  const sortedSchedules = flattenedSchedules.sort((a, b) => {
    if (a.dayId === b.dayId) {
      return a.sessionId - b.sessionId;
    }
    return a.dayId - b.dayId;
  });

  const groupedSchedules = Array.from(
    { length: 6 },
    (_, index) => index + 1,
  ).map((dayIndex) => {
    const coursesForDay = sortedSchedules.filter(
      (schedule) => schedule.dayId === dayIndex,
    );
    return {
      dayIndex,
      dayName: dayName[dayIndex],
      courses: coursesForDay,
    };
  });

  return groupedSchedules;
};

const getDailySchedule = () => {
  const selectedCourses = getSelectedCourses();

  const today = new Date().getDay();

  const flattenedSchedules = selectedCourses.flatMap((item) =>
    item.course.schedule.map((schedule) => ({
      ...item,
      dayId: schedule.day_id,
      sessionId: schedule.session_id,
    })),
  );

  const schedulesForToday = flattenedSchedules.filter(
    (schedule) => schedule.dayId === today,
  );

  const sortedSchedules = schedulesForToday.sort((a, b) => {
    return a.sessionId - b.sessionId;
  });

  const sessionMap = new Map<number, SelectedCourseModel[]>();

  for (let i = 1; i <= 6; i++) {
    sessionMap.set(i, []);
  }

  sortedSchedules.forEach((schedule) => {
    const sessionCourses = sessionMap.get(schedule.sessionId);
    if (sessionCourses) {
      sessionCourses.push(schedule);
    }
  });

  const sessions = Array.from(sessionMap.entries()).map(
    ([sessionId, courses]) => ({
      sessionId,
      courses,
    }),
  );

  const groupedSchedules = {
    dayIndex: today,
    dayName: dayName[today],
    sessions,
  };

  return groupedSchedules;
};

const getWeeklySchedule = () => {
  const selectedCourses = getSelectedCourses();

  const flattenedSchedules = selectedCourses.flatMap((item) =>
    item.course.schedule.map((schedule) => ({
      ...item,
      dayId: schedule.day_id,
      sessionId: schedule.session_id,
    })),
  );

  const sortedSchedules = flattenedSchedules.sort((a, b) => {
    if (a.dayId === b.dayId) {
      return a.sessionId - b.sessionId;
    }
    return a.dayId - b.dayId;
  });

  const groupedSchedules = Array.from(
    { length: 6 },
    (_, index) => index + 1,
  ).map((dayIndex) => {
    const coursesForDay = sortedSchedules.filter(
      (schedule) => schedule.dayId === dayIndex,
    );
    return {
      dayIndex,
      dayName: dayName[dayIndex],
      courses: coursesForDay,
    };
  });

  return groupedSchedules;
};

export {
  getCourses,
  getSelectedCourses,
  joinCourse,
  leaveCourse,
  getCourseDataStatus,
  getCourseById,
  getCurrentSKS,
  getCoursesForDay,
  getScheduleByDayAndSession,
  getRegularSchedule,
  getDailySchedule,
  getWeeklySchedule,
};
