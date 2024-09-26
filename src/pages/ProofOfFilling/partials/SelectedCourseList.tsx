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
import { SelectedCourseModel } from "@models/course";

const SelectedCourseList = () => {
  const selectedCourses: SelectedCourseModel[] = getSelectedCourses();
  const parentHeader = ["no", "hari", "detail kelas"];
  const courseDetailHeader = [
    "mata kuliah",
    "waktu kuliah",
    "kelas",
    "jumlah sks",
  ];
  const commonTdClass = "px-4 border border-gray-200";
  return (
    <div className="flex flex-col gap-5">
      <BaseTable>
        <TableBody header={parentHeader}>
          {[...Array(6)].length !== 0 ? (
            [...Array(6)].map((_, index) => {
              const dayIndex = index + 1;
              const coursesForDay = getCoursesForDay(selectedCourses, dayIndex);
              const tdDataMap: (string | number)[] = [
                dayIndex,
                dayName[dayIndex],
              ];
              return (
                <TableRow key={dayIndex}>
                  {tdDataMap.map((value, key) => (
                    <td key={key} className={commonTdClass}>
                      {value}
                    </td>
                  ))}
                  <td className={commonTdClass}>
                    {coursesForDay.length > 0 ? (
                      coursesForDay.map((course) => {
                        const divDataMap: (string | number)[] = [
                          course.course.name,
                          course.schedule
                            .map((schedule) => sessionName[schedule.session_id])
                            .join(", "),
                          course.course.class,
                          course.course.sks,
                        ];
                        return (
                          <BaseTable key={course.course.id}>
                            <TableBody
                              header={courseDetailHeader}
                              isVertical
                              isUsingColon={false}
                            >
                              <TableRow key={course.course.id}>
                                {divDataMap.map((value, key) => (
                                  <div key={key}>{value}</div>
                                ))}
                              </TableRow>
                            </TableBody>
                          </BaseTable>
                        );
                      })
                    ) : (
                      <div className="text-sm text-left text-gray-500">
                        Tidak ada mata kuliah yang diambil pada hari ini
                      </div>
                    )}
                  </td>
                </TableRow>
              );
            })
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
