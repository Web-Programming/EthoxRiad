import {
  BaseTable,
  TableBody,
  TableRow,
  TableEmptyRow,
} from "@components/Table";
import {
  getRegularSchedule,
  getScheduleByDayAndSession,
} from "../../../api/course/service";
import { sessionName } from "@utils/consts";
import { getBuildingName } from "../utils/activeSchedule";

const header = ["no", "hari", "jam", "mata kuliah", "sks", "ruang", "kelas"];

const RegularSchedule = () => {
  const regularSchedule = getRegularSchedule();
  let rowIndex = 1;

  return (
    <div className="flex flex-col gap-5">
      <BaseTable>
        <TableBody header={header}>
          {regularSchedule.length !== 0 ? (
            regularSchedule.flatMap((daySchedule, dayIndex) =>
              daySchedule.courses.map((course, courseIndex) => {
                const exactSchedule = getScheduleByDayAndSession(
                  course.course.schedule,
                  daySchedule.dayIndex,
                  course.sessionId,
                );
                return (
                  <TableRow key={`${dayIndex}-${courseIndex}`}>
                    <td className="px-4 py-2 border border-secondary">
                      {rowIndex++}
                    </td>
                    <td className="px-4 py-2 border border-secondary">
                      {daySchedule.dayName}
                    </td>
                    <td className="px-4 py-2 border border-secondary">
                      {sessionName[course.sessionId]}
                    </td>
                    <td className="px-4 py-2 border border-secondary">
                      {course.course.name}
                    </td>
                    <td className="px-4 py-2 border border-secondary">
                      {course.course.sks}
                    </td>
                    <td className="px-4 py-2 border border-secondary">
                      {exactSchedule && exactSchedule.room ? (
                        <div>
                          <div>{exactSchedule.room}</div>
                          <div>{getBuildingName(exactSchedule.room)}</div>
                        </div>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="px-4 py-2 border border-secondary">
                      {course.course.class ? course.course.class : "-"}
                    </td>
                  </TableRow>
                );
              }),
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

export default RegularSchedule;
