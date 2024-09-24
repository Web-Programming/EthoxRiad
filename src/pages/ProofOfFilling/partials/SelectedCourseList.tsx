import {
  BaseTable,
  TableBody,
  TableEmptyRow,
  TableRow,
} from "@components/Table";
import {
  getCoursesForDay,
  getSelectedCourses,
} from "../../../api/course/service";
import { dayName, sessionName } from "@utils/consts";
import { SelectedCourseModel } from "../../../api/course/model";

const SelectedCourseList = () => {
  const selectedCourses: SelectedCourseModel[] = getSelectedCourses();
  const parentHeader = ["no", "hari", "detail kelas"];
  const courseDetailHeader = [
    "mata kuliah",
    "waktu kuliah",
    "kelas",
    "jumlah sks",
  ];

  return (
    <div className="flex flex-col gap-5">
      <BaseTable>
        <TableBody header={parentHeader}>
          {Array.from({ length: 6 }, (_, index) => index + 1).length !== 0 ? (
            Array.from({ length: 6 }, (_, index) => index + 1).map(
              (dayIndex) => {
                const coursesForDay = getCoursesForDay(
                  selectedCourses,
                  dayIndex,
                );
                return (
                  <TableRow key={dayIndex}>
                    <td className="px-4 border border-secondary">{dayIndex}</td>
                    <td className="px-4 border border-secondary">
                      {dayName[dayIndex]}
                    </td>
                    <td className="px-4 border border-secondary">
                      {coursesForDay.length > 0 ? (
                        coursesForDay.map((course) => (
                          <BaseTable>
                            <TableBody
                              header={courseDetailHeader}
                              isVertical
                              isUsingColon={false}
                            >
                              <TableRow key={course.course.id}>
                                <div>{course.course.name}</div>
                                <div>
                                  {course.schedule
                                    .map(
                                      (schedule) =>
                                        sessionName[schedule.session_id],
                                    )
                                    .join(", ")}
                                </div>
                                <div>{course.course.class}</div>
                                <div>{course.course.sks} SKS</div>
                              </TableRow>
                            </TableBody>
                          </BaseTable>
                        ))
                      ) : (
                        <div className="text-sm text-gray-500">No courses</div>
                      )}
                    </td>
                  </TableRow>
                );
              },
            )
          ) : (
            <TableEmptyRow
              text="Data tidak ditemukan"
              colspan={parentHeader.length}
            />
          )}
        </TableBody>
      </BaseTable>
    </div>
  );
};

export default SelectedCourseList;
