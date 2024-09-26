import { useState, useEffect } from "react";

import { CourseModel } from "@models/course";
import {
  getCourses,
  joinCourse,
  leaveCourse,
} from "../../../api/course/service";

const useCourses = (keyword: string) => {
  const [courses, setCourses] = useState<CourseModel[]>(getCourses(keyword));

  useEffect(() => {
    setCourses(getCourses(keyword));
  }, [keyword]);

  const handleJoinCourse = (courseId: number) => {
    const isJoined = joinCourse(courseId);
    if (isJoined) {
      setCourses(getCourses(keyword));
    }
  };

  const handleLeaveCourse = (courseId: number) => {
    const isLeaved = leaveCourse(courseId);
    if (isLeaved) {
      setCourses(getCourses(keyword));
    }
  };

  return {
    courses,
    handleJoinCourse,
    handleLeaveCourse,
  };
};

export default useCourses;
