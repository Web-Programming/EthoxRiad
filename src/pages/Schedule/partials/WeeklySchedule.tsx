import {
  BaseTable,
  TableBody,
  TableRow,
  TableEmptyRow,
} from "@components/Table";
import {
  getWeeklySchedule,
  getScheduleByDayAndSession,
} from "../../../api/course/service";
import { sessionName } from "@utils/consts";

const header = [
  "hari/jam",
  "senin",
  "selasa",
  "rabu",
  "kamis",
  "jumat",
  "sabtu",
];

const WeeklySchedule = () => {
  const weeklySchedule = getWeeklySchedule();
  const commonTdClass = "p-2 border border-gray-200";

  return (
    <div className="flex flex-col gap-5">
      <BaseTable>
        <TableBody header={header}>
          {weeklySchedule.length !== 0 ? (
            Object.keys(sessionName).map((sessionId) => (
              <TableRow key={sessionId}>
                <td className={commonTdClass}>
                  {
                    sessionName[
                      sessionId as unknown as keyof typeof sessionName
                    ]
                  }
                </td>
                {header.slice(1).map((_, dayIndex) => {
                  const dayId = dayIndex + 1;
                  const coursesForDayAndSession = weeklySchedule
                    .filter(
                      (schedule) =>
                        schedule.dayIndex === dayId &&
                        schedule.courses.some(
                          (course) => course.sessionId === parseInt(sessionId),
                        ),
                    )
                    .flatMap((schedule) =>
                      schedule.courses.filter(
                        (course) => course.sessionId === parseInt(sessionId),
                      ),
                    );

                  return (
                    <td key={dayId} className={commonTdClass}>
                      {coursesForDayAndSession.length > 0 &&
                        coursesForDayAndSession.map((course, courseIndex) => {
                          const exactSchedule = getScheduleByDayAndSession(
                            course.course.schedule,
                            dayId,
                            parseInt(sessionId),
                          );

                          return (
                            <div
                              key={courseIndex}
                              className="rounded-lg p-4 bg-blue-400 text-white"
                            >
                              <div className="font-bold">
                                {course.course.name}
                              </div>
                              <hr className="my-2 border border-white" />
                              <div>
                                {exactSchedule && exactSchedule.room
                                  ? exactSchedule.room
                                  : "-"}
                              </div>
                            </div>
                          );
                        })}
                    </td>
                  );
                })}
              </TableRow>
            ))
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

export default WeeklySchedule;
