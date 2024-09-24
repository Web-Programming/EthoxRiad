import {
  BaseTable,
  TableBody,
  TableEmptyRow,
  TableRow,
} from "@components/Table";
import {
  getCourseDataStatus,
  getCourses,
  joinCourse,
  leaveCourse,
} from "../../../api/course/service";
import { dayName, sessionName, statusDetail, statusName } from "@utils/consts";
import { cn } from "@utils/cn";
import { useEffect, useState } from "react";
import { CourseModel } from "../../../api/course/model";

type CourseListProps = {
  keyword: string;
};

const CourseList = ({ keyword }: CourseListProps) => {
  const [courses, setCourses] = useState<CourseModel[]>(getCourses(keyword));

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

  useEffect(() => {
    setCourses(getCourses(keyword));
  }, [keyword]);

  const header = [
    "no",
    "mata kuliah",
    "kelas",
    "jumlah sks",
    "semester",
    "kapasitas kelas",
    "jadwal kuliah",
    "status",
    "aksi",
  ];

  return (
    <div className="flex flex-col gap-5">
      <BaseTable>
        <TableBody header={header}>
          {!keyword || keyword === "" || keyword.length < 3 ? (
            <TableEmptyRow
              text="Silahkan masukkan kata kunci pencarian minimal 3 karakter"
              colspan={header.length}
            />
          ) : courses.length !== 0 ? (
            courses.map((row, index) => {
              return (
                <TableRow key={row.id}>
                  <td className="px-4 border border-gray-200">{index + 1}</td>
                  <td className="px-4 border border-gray-200">
                    {row.code ? row.code : "-"} | {row.name ? row.name : "-"}
                  </td>
                  <td className="px-4 border border-gray-200">
                    {row.class ? row.class : "-"}
                  </td>
                  <td className="px-4 border border-gray-200">
                    {row.sks ? row.sks : "-"} sks
                  </td>
                  <td className="px-4 border border-gray-200">
                    {row.semester_id ? row.semester_id : "-"}
                  </td>
                  <td className="px-4 border border-gray-200">
                    {row.capacity ? row.capacity : "-"} / 40
                  </td>
                  <td className="px-4 border border-gray-200">
                    {row.schedule
                      ? row.schedule.map((schedule) => {
                          return (
                            <div
                              key={schedule.id}
                              className="flex flex-col border-dashed border border-gray-300 pb-2 text-center my-2 rounded-lg"
                            >
                              <div>{dayName[schedule.day_id] || "?"}</div>
                              <div>
                                {sessionName[schedule.session_id] ||
                                  "00:00 - 00:00"}
                              </div>
                            </div>
                          );
                        })
                      : "-"}
                  </td>
                  <td className="px-4 border border-gray-200">
                    <div
                      className={cn(
                        statusDetail[getCourseDataStatus(row.id)][1],
                        "py-2 px-4 rounded-full text-white text-xs font-semibold",
                      )}
                    >
                      {statusDetail[getCourseDataStatus(row.id)][0]}
                    </div>
                  </td>
                  <td className="px-4 border border-gray-200">
                    {row.capacity >= 40 ? (
                      <div className="py-2 px-4 rounded-md text-white text-xs font-semibold bg-gray-500">
                        Penuh
                      </div>
                    ) : statusDetail[getCourseDataStatus(row.id)][0] ==
                        statusName.APPROVED ||
                      statusDetail[getCourseDataStatus(row.id)][0] ==
                        statusName.WAITING ? (
                      <div
                        onClick={() => handleLeaveCourse(row.id)}
                        className="py-2 px-4 rounded-md text-white text-xs font-semibold bg-red-500 hover:bg-red-700"
                      >
                        Keluar kelas
                      </div>
                    ) : (
                      <div
                        className="py-2 px-4 rounded-md text-white text-xs font-semibold bg-green-500 hover:bg-green-700"
                        onClick={() => handleJoinCourse(row.id)}
                      >
                        Masuk kelas
                      </div>
                    )}
                  </td>
                </TableRow>
              );
            })
          ) : (
            <TableEmptyRow
              text="Data tidak ditemukan"
              colspan={header.length}
            />
          )}
        </TableBody>
      </BaseTable>
    </div>
  );
};

export default CourseList;
