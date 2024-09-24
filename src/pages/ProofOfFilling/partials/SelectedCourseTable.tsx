import {
  BaseTable,
  TableBody,
  TableEmptyRow,
  TableRow,
} from "@components/Table";
import {
  getCurrentSKS,
  getSelectedCourses,
  leaveCourse,
} from "../../../api/course/service";
import { dayName, sessionName, statusDetail, statusName } from "@utils/consts";
import { cn } from "@utils/cn";
import { useState } from "react";
import { SelectedCourseModel } from "../../../api/course/model";

type SelectedCourseTableProps = {
  setCurrentSKS: React.Dispatch<React.SetStateAction<number>>;
};

const SelectedCourseTable = ({ setCurrentSKS }: SelectedCourseTableProps) => {
  const [selectedCourses, setSelectedCourses] =
    useState<SelectedCourseModel[]>(getSelectedCourses());

  const header = [
    "no",
    "kode mk",
    "mata kuliah",
    "sks",
    "kelas",
    "jadwal",
    "catatan dosen",
    "status",
    "aksi",
  ];

  const handleLeaveCourse = (courseId: number) => {
    const isLeaved = leaveCourse(courseId);
    if (isLeaved) {
      setSelectedCourses(getSelectedCourses());
      setCurrentSKS(getCurrentSKS());
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <BaseTable>
        <TableBody header={header}>
          {selectedCourses.length !== 0 ? (
            selectedCourses.map((row, index) => {
              return (
                <TableRow key={row.course.id}>
                  <td className="px-4 border border-gray-200">{index + 1}</td>
                  <td className="px-4 border border-gray-200">
                    {row.course.code ? row.course.code : "-"}
                  </td>
                  <td className="px-4 border border-gray-200">
                    {row.course.name ? row.course.name : "-"}
                  </td>
                  <td className="px-4 border border-gray-200">
                    {row.course.sks ? row.course.sks : "-"} sks
                  </td>
                  <td className="px-4 border border-gray-200">
                    {row.course.class ? row.course.class : "-"}
                  </td>
                  <td className="px-4 border border-gray-200">
                    {row.course.schedule
                      ? row.course.schedule.map((schedule) => {
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
                    {row.lecturer_note ? row.lecturer_note : "-"}
                  </td>
                  <td className="px-4 border border-gray-200">
                    <div
                      className={cn(
                        statusDetail[row.status_id][1],
                        "py-2 px-4 rounded-full text-white text-xs font-semibold",
                      )}
                    >
                      {statusDetail[row.status_id][0]}
                    </div>
                  </td>
                  <td className="px-4 border border-gray-200">
                    {statusDetail[row.status_id][0] == statusName.APPROVED ||
                      (statusDetail[row.status_id][0] == statusName.WAITING && (
                        <div
                          onClick={() => handleLeaveCourse(row.course.id)}
                          className="py-2 px-4 rounded-md text-white text-xs font-semibold bg-red-500 hover:bg-red-700"
                        >
                          Keluar kelas
                        </div>
                      ))}
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

export default SelectedCourseTable;
