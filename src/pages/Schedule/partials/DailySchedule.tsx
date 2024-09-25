import {
  BaseTable,
  TableBody,
  TableRow,
  TableEmptyRow,
} from "@components/Table";
import {
  getDailySchedule,
  getScheduleByDayAndSession,
} from "../../../api/course/service";
import { sessionName } from "@utils/consts";
import { getDateToday } from "@utils/formatter";
import { getBuildingName, isActiveSchedule } from "../utils/activeSchedule";
import { cn } from "@utils/cn";

const header = ["jam", getDateToday()];

const DailySchedule = () => {
  const dailySchedule = getDailySchedule();
  const commonTdClass = "px-4 border border-gray-200";

  return (
    <div className="flex flex-col gap-5 bg-white">
      <BaseTable>
        <TableBody header={header}>
          {dailySchedule.sessions.length !== 0 ? (
            Object.keys(sessionName).map((sessionId) => {
              const isActive = isActiveSchedule(parseInt(sessionId));
              const coursesForSession = dailySchedule.sessions
                .filter((session) => session.sessionId === parseInt(sessionId))
                .flatMap((session) => session.courses);

              return (
                <TableRow
                  key={sessionId}
                  className={cn({ "bg-blue-400 text-white": isActive })}
                >
                  <td className={commonTdClass}>
                    {
                      sessionName[
                        sessionId as unknown as keyof typeof sessionName
                      ]
                    }
                  </td>
                  <td className={commonTdClass}>
                    {coursesForSession.length > 0 ? (
                      coursesForSession.map((course, courseIndex) => {
                        const exactSchedule = getScheduleByDayAndSession(
                          course.course.schedule,
                          dailySchedule.dayIndex,
                          parseInt(sessionId),
                        );

                        return (
                          <div
                            key={courseIndex}
                            className={cn(
                              "rounded-lg text-left p-4 my-4",
                              isActive
                                ? "bg-blue-200 text-black"
                                : "bg-gray-200",
                            )}
                          >
                            <div className="font-bold">
                              {course.course.name}
                            </div>
                            <div>
                              Ruang kelas:{" "}
                              {exactSchedule && exactSchedule.room
                                ? exactSchedule.room
                                : "-"}
                            </div>
                            <div>
                              {exactSchedule &&
                                getBuildingName(exactSchedule.room)}
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="text-sm">Tidak ada jadwal</div>
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

export default DailySchedule;
