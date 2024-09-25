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
  const commonTdClass = "px-4 border border-gray-200";

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
                const tdDataMap: (string | number)[] = [
                  rowIndex++,
                  daySchedule.dayName || "-",
                  sessionName[course.sessionId] || "-",
                  course.course.name || "-",
                  course.course.sks || "-",
                  "-",
                  course.course.class || "-",
                ];
                return (
                  <TableRow key={`${dayIndex}-${courseIndex}`}>
                    {tdDataMap.map((value, key) => (
                      <td key={key} className={commonTdClass}>
                        {key === 5 ? (
                          exactSchedule ? (
                            <div className="p-2">
                              <div>{exactSchedule.room}</div>
                              <div>{getBuildingName(exactSchedule.room)}</div>
                            </div>
                          ) : (
                            "-"
                          )
                        ) : (
                          value
                        )}
                      </td>
                    ))}
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
