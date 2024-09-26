import {
  BaseTable,
  TableBody,
  TableEmptyRow,
  TableRow,
} from "@components/Table";
import { getStudent } from "../../../api/student/service";

type StudentInfoProps = {
  currentSKS: number;
};

const StudentInfo = ({ currentSKS }: StudentInfoProps) => {
  const studentData = getStudent();
  const header = ["npm", "nama", "jurusan", "waktu kuliah", "total sks"];

  const divMap: (string | number)[] = [
    studentData.id || "-",
    studentData.name || "-",
    studentData.major || "-",
    studentData.shift || "-",
    `${currentSKS} / ${studentData.max_sks}` || "-",
  ];
  return (
    <div className="flex flex-col gap-5">
      <BaseTable>
        <TableBody header={header} isVertical>
          {studentData ? (
            <TableRow key={studentData.id}>
              {divMap.map((value, key) => (
                <div key={key}>{value}</div>
              ))}
            </TableRow>
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

export default StudentInfo;
