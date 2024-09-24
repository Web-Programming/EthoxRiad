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

  return (
    <div className="flex flex-col gap-5">
      <BaseTable>
        <TableBody header={header} isVertical>
          {studentData ? (
            <TableRow key={studentData.id}>
              <div>{studentData.id}</div>

              <div>{studentData.name ? studentData.name : "-"}</div>

              <div>{studentData.major ? studentData.major : "-"}</div>

              <div>{studentData.shift ? studentData.shift : "-"}</div>

              <div>
                {currentSKS ? currentSKS : 0} /{" "}
                {studentData.max_sks ? studentData.max_sks : "-"}
              </div>
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
