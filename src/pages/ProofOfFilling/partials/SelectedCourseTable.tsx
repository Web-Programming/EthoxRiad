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
import {
  dayName,
  sessionName,
  statusDetailColor,
  statusDetailName,
  statusNameMap,
} from "@utils/consts";
import { cn } from "@utils/cn";
import { useState } from "react";
import { SelectedCourseModel } from "@models/course";

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
  const commonTdClass = "px-4 border border-gray-200";
  return (
    <div className="flex flex-col gap-5">
      <BaseTable>
        <TableBody header={header}>
          {selectedCourses.length !== 0 ? (
            selectedCourses.map((row, index) => {
              const statusName = statusDetailName[row.status_id];
              const statusColor = statusDetailColor[statusName];
              const tdDataMap: (string | number)[] = [
                index + 1,
                row.course.code || "-",
                row.course.name || "-",
                `${row.course.sks} sks` || "-",
                row.course.class || "-",
                row.course.schedule
                  ? row.course.schedule
                      .map(
                        (schedule) =>
                          `${dayName[schedule.day_id] || "?"} ${sessionName[schedule.session_id] || "000 - 00:00"}`,
                      )
                      .join(", ")
                  : "-",
                row.lecturer_note || "-",
                statusName || "-",
                statusName == statusNameMap.APPROVED ||
                statusName == statusNameMap.WAITING
                  ? "Keluar kelas"
                  : "-",
              ];
              return (
                <TableRow key={row.course.id}>
                  {tdDataMap.map((value, key) => {
                    return (
                      <td key={key} className={commonTdClass}>
                        {key === 5 && row.course.schedule ? (
                          row.course.schedule.map((schedule) => (
                            <div
                              key={schedule.id}
                              className="flex flex-col border-dashed border border-gray-300 p-2 text-center my-2 rounded-lg"
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
                          statusName == statusNameMap.APPROVED ||
                          (statusName == statusNameMap.WAITING && (
                            <div
                              onClick={() => handleLeaveCourse(row.course.id)}
                              className="py-2 px-4 rounded-md text-white text-xs font-semibold bg-red-500 hover:bg-red-700"
                            >
                              Keluar kelas
                            </div>
                          ))
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

export default SelectedCourseTable;
