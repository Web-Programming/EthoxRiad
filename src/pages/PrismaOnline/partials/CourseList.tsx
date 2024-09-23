import {
  BaseTable,
  TableBody,
  TableEmptyRow,
  TableRow,
} from "@components/Table";
import { getCourseDataStatus, getCourses } from "../../../api/course/service";
import { dayName, sessionName, statusDetail, statusName } from "@utils/consts";
import { cn } from "@utils/cn";

type CourseListProps = {
  keyword: string;
};

const CourseList = ({ keyword }: CourseListProps) => {
  const coursesData = getCourses(keyword);
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
          {coursesData.length !== 0 ? (
            coursesData.map((row, index) => {
              return (
                <TableRow key={row.id}>
                  <td className="px-4 border border-secondary">{index + 1}</td>
                  <td className="px-4 border border-secondary">
                    {row.code ? row.code : "-"} | {row.name ? row.name : "-"}
                  </td>
                  <td className="px-4 border border-secondary">
                    {row.class ? row.class : "-"}
                  </td>
                  <td className="px-4 border border-secondary">
                    {row.sks ? row.sks : "-"} sks
                  </td>
                  <td className="px-4 border border-secondary">
                    {row.semester_id ? row.semester_id : "-"}
                  </td>
                  <td className="px-4 border border-secondary">
                    {row.capacity ? row.capacity : "-"} / 40
                  </td>
                  <td className="px-4 border border-secondary">
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
                  <td className="px-4 border border-secondary">
                    <div
                      className={cn(
                        statusDetail[getCourseDataStatus(row.id)][1],
                        "py-2 px-4 rounded-full text-white text-xs font-semibold",
                      )}
                    >
                      {statusDetail[getCourseDataStatus(row.id)][0]}
                    </div>
                  </td>
                  <td className="px-4 border border-secondary">
                    {row.capacity >= 40 ? (
                      <div className="py-2 px-4 rounded-md text-white text-xs font-semibold bg-gray-500">
                        Penuh
                      </div>
                    ) : statusDetail[getCourseDataStatus(row.id)][0] ==
                        statusName.APPROVED ||
                      statusDetail[getCourseDataStatus(row.id)][0] ==
                        statusName.WAITING ? (
                      <div className="py-2 px-4 rounded-md text-white text-xs font-semibold bg-red-500 hover:bg-red-700">
                        Keluar kelas
                      </div>
                    ) : (
                      <div className="py-2 px-4 rounded-md text-white text-xs font-semibold bg-green-500 hover:bg-green-700">
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
