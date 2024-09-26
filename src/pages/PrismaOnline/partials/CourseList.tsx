import {
  BaseTable,
  TableBody,
  TableEmptyRow,
  TableRow,
} from "@components/Table";
import { getCourseDataStatusName } from "../../../api/course/service";
import {
  dayName,
  sessionName,
  statusDetailColor,
  statusNameMap,
} from "@utils/consts";
import { cn } from "@utils/cn";
import useCourses from "./useCourses";

type CourseListProps = {
  keyword: string;
};

const CourseList = ({ keyword }: CourseListProps) => {
  const { courses, handleJoinCourse, handleLeaveCourse } = useCourses(keyword);

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
  const commonTdClass = "px-4 border border-gray-200";
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
              const statusName = getCourseDataStatusName(row.id);
              const statusColor = statusDetailColor[statusName];
              const tdDataMap: (string | number)[] = [
                index + 1,
                (row.code || "-") + " | " + (row.name || "-"),
                row.class || "-",
                row.sks + " sks" || "-",
                row.semester_id || "-",
                row.capacity + " / 40" || "-",

                row.schedule
                  ? row.schedule
                      .map(
                        (schedule) =>
                          `${dayName[schedule.day_id] || "?"} ${sessionName[schedule.session_id] || "000 - 00:00"}`,
                      )
                      .join(", ")
                  : "-",
                statusName || "-",

                row.capacity >= 40
                  ? "Penuh"
                  : statusName == statusNameMap.APPROVED ||
                      statusName == statusNameMap.WAITING
                    ? "Keluar kelas"
                    : "Masuk kelas",
              ];

              return (
                <TableRow key={row.id}>
                  {tdDataMap.map((value, key) => {
                    return (
                      <td key={key} className={commonTdClass}>
                        {key === 6 && row.schedule ? (
                          row.schedule.map((schedule) => (
                            <div
                              key={schedule.id}
                              className="flex flex-col border-dashed border border-gray-300 pb-2 text-center my-2 rounded-lg"
                            >
                              <div>{dayName[schedule.day_id] || "?"}</div>
                              <div className="text-nowrap">
                                {sessionName[schedule.session_id] ||
                                  "00:00 - 00:00"}
                              </div>
                            </div>
                          ))
                        ) : key === 7 ? (
                          <div
                            className={cn(
                              statusColor,
                              "py-2 px-4 rounded-full text-white text-xs font-semibold",
                            )}
                          >
                            {statusName}
                          </div>
                        ) : key === 8 ? (
                          row.capacity >= 40 ? (
                            <div className="py-2 px-4 rounded-md text-white text-xs font-semibold bg-gray-500">
                              Penuh
                            </div>
                          ) : statusName == statusNameMap.APPROVED ||
                            statusName == statusNameMap.WAITING ? (
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
                          )
                        ) : (
                          value
                        )}
                      </td>
                    );
                  })}
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
