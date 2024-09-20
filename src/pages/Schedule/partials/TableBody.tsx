import {
  BaseTable,
  TableBody,
  TableEmptyRow,
  TableRow,
} from "@components/Table";
import { getCourses } from "../../../api/course/service";
import { dayName, sessionName } from "@utils/consts";
const TableBodyContent = () => {
  const coursesData = getCourses();
  const header = [
    "no",
    "kode mk",
    "sks",
    "kelas",
    "jadwal",
    "catatan dosen",
    "status",
  ];

  return (
    <div className="flex flex-col gap-5 p-1 sm:p-5 md:p-8 lg:p-10">
      <BaseTable>
        <TableBody header={header}>
          {coursesData.length !== 0 ? (
            coursesData.map((row) => {
              return (
                <TableRow key={row.id}>
                  <td className="px-4">{row.id}</td>
                  <td className="px-4">{row.code ? row.code : "-"}</td>
                  <td className="px-4">{row.sks ? row.sks : "-"}</td>
                  <td className="px-4">{row.class ? row.class : "-"}</td>
                  <td className="px-4">
                    {row.schedule
                      ? row.schedule.map((schedule) => {
                          return (
                            <div
                              key={schedule.id}
                              className="flex flex-col gap-2 border-dashed border border-gray-300 pb-2 text-center my-2"
                            >
                              <div>{dayName[schedule.day_id]}</div>
                              <div>{sessionName[schedule.session_id]}</div>
                            </div>
                          );
                        })
                      : "-"}
                  </td>
                  <td className="px-4">
                    {row.lecturer_note ? row.lecturer_note : "-"}
                  </td>
                  <td className="px-4">
                    {row.status_id === 1 ? "Menunggu" : "Disetujui"}
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
