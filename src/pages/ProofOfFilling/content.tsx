import SelectedCourseList from "./partials/SelectedCourseList";
import StudentInfo from "./partials/StudentInfo";

const ProofOfFillingContent = () => {
  return (
    <div className="py-6 px-4">
      <div className="text-2xl font-bold">Bukti Pengisian KRS</div>

      {/* StudentInfo */}
      <div className="bg-white rounded-lg py-1 px-5">
        <StudentInfo />
      </div>

      {/* SelectedCourseList */}
      <div className="text-2xl font-bold py-4 px-5">Daftar Matakuliah</div>
      <hr />
      <div className="bg-white rounded-lg py-1 px-5">
        <SelectedCourseList />
      </div>
    </div>
  );
};

export default ProofOfFillingContent;
