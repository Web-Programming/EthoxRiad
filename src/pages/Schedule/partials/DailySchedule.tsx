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

const header = ["jam", getDateToday()];

const DailySchedule = () => {
  const dailySchedule = getDailySchedule();

  return (
    <div className="flex flex-col gap-5">
      <BaseTable>
        <TableBody header={header}>
          {dailySchedule.sessions.length !== 0 ? (
            dailySchedule.sessions.map((session, sessionIndex) => (
              <TableRow key={sessionIndex}>
                <td className="px-4 py-2 border border-secondary">
                  {sessionName[session.sessionId]}
                </td>
                <td className="px-4 py-2 border border-secondary">
                  {session.courses.length > 0 ? (
                    session.courses.map((course, courseIndex) => {
                      const exactSchedule = getScheduleByDayAndSession(
                        course.course.schedule,
                        dailySchedule.dayIndex,
                        session.sessionId,
                      );
                      return (
                        <div
                          key={courseIndex}
                          className="bg-gray-200 rounded-lg text-left p-4"
                        >
                          <div className="font-bold">{course.course.name}</div>
                          <div>
                            Ruang kelas:{" "}
                            {exactSchedule && exactSchedule.room
                              ? exactSchedule.room
                              : "-"}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-sm text-gray-500">
                      Tidak ada jadwal
                    </div>
                  )}
                </td>
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

export default DailySchedule;
