import {
  BaseTable,
  TableBody,
  TableEmptyRow,
  TableRow,
} from "@components/Table";
import { getSelectedCourses } from "../../../api/course/service";
import { dayName, sessionName, statusDetail, statusName } from "@utils/consts";
import { cn } from "@utils/cn";
const TableBodyContent = () => {
  const selectedCoursesData = getSelectedCourses();
  const header = [
    "no",
    "kode mk",
    "sks",
    "kelas",
    "jadwal",
    "catatan dosen",
    "status",
    "aksi",
  ];

  return (
    <div className="flex flex-col gap-5">
      <BaseTable>
        <TableBody header={header}>
          {selectedCoursesData.length !== 0 ? (
            selectedCoursesData.map((row) => {
              return (
                <TableRow key={row.course.id}>
                  <td className="px-4 border border-secondary">
                    {row.course.id}
                  </td>
                  <td className="px-4 border border-secondary">
                    {row.course.code ? row.course.code : "-"}
                  </td>
                  <td className="px-4 border border-secondary">
                    {row.course.sks ? row.course.sks : "-"} sks
                  </td>
                  <td className="px-4 border border-secondary">
                    {row.course.class ? row.course.class : "-"}
                  </td>
                  <td className="px-4 border border-secondary">
                    {row.course.schedule
                      ? row.course.schedule.map((schedule) => {
                          return (
                            <div
                              key={schedule.id}
                              className="flex flex-col border-dashed border border-gray-300 pb-2 text-center my-2 rounded-lg"
                            >
                              <div>{dayName[schedule.day_id]}</div>
                              <div>{sessionName[schedule.session_id]}</div>
                            </div>
                          );
                        })
                      : "-"}
                  </td>
                  <td className="px-4 border border-secondary">
                    {row.lecturer_note ? row.lecturer_note : "-"}
                  </td>
                  <td className="px-4 border border-secondary">
                    <div
                      className={cn(
                        statusDetail[row.status_id][1],
                        "py-2 px-4 rounded-full text-white text-xs font-semibold",
                      )}
                    >
                      {statusDetail[row.status_id][0]}
                    </div>
                  </td>
                  <td className="px-4 border border-secondary">
                    {statusDetail[row.status_id][0] !== statusName.APPROVED && (
                      <div className="py-2 px-4 rounded-md text-white text-xs font-semibold bg-red-500 hover:bg-red-700">
                        Keluar kelas
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

export default TableBodyContent;
