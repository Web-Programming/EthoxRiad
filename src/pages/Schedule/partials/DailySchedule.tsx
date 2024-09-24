import {
  BaseTable,
  TableBody,
  TableRow,
  TableEmptyRow,
} from "@components/Table";
import { getRegularSchedule } from "../../../api/course/service";
import { sessionName } from "@utils/consts";

const header = ["no", "hari", "jam", "mata kuliah", "sks", "ruang", "kelas"];

const DailySchedule = () => {
  const regularSchedule = getRegularSchedule();

  return (
    <div className="flex flex-col gap-5">
      <BaseTable>
        <TableBody header={header}>
          {regularSchedule.length !== 0 ? (
            regularSchedule.flatMap((daySchedule, dayIndex) =>
              daySchedule.courses.map((course, courseIndex) => (
                <TableRow key={`${dayIndex}-${courseIndex}`}>
                  <td className="px-4 border border-secondary">
                    {courseIndex + 1}
                  </td>
                  <td className="px-4 border border-secondary">
                    {daySchedule.dayName}
                  </td>
                  <td className="px-4 border border-secondary">
                    {sessionName[course.sessionId]}
                  </td>
                  <td className="px-4 border border-secondary">
                    {course.course.name}
                  </td>
                  <td className="px-4 border border-secondary">
                    {course.course.sks} sks
                  </td>
                  <td className="px-4 border border-secondary">
                    {course.course.schedule[0].room
                      ? course.course.schedule[0].room
                      : "-"}
                  </td>
                  <td className="px-4 border border-secondary">
                    {course.course.class ? course.course.class : "-"}
                  </td>
                </TableRow>
              )),
            )
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

export default DailySchedule;
