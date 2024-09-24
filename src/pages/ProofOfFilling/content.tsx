import { useState } from "react";
import { TbListCheck } from "react-icons/tb";
import { TbListDetails } from "react-icons/tb";
import SelectedCourseTable from "./partials/SelectedCourseTable";
import StudentInfo from "./partials/StudentInfo";
import { getCurrentSKS } from "../../api/course/service";
import SelectedCourseList from "./partials/SelectedCourseList";

const ProofOfFillingContent = () => {
  const [currentSKS, setCurrentSKS] = useState<number>(getCurrentSKS());
  const [isListMode, setIsListMode] = useState<boolean>(false);

  return (
    <div className="py-6 px-4">
      <div className="text-2xl font-bold mb-4">Bukti Pengisian KRS</div>

      {/* StudentInfo */}
      <div className="bg-white rounded-lg py-1 px-5">
        <StudentInfo currentSKS={currentSKS} />
      </div>

      {/* SelectedCourse */}
      <div className="flex justify-between items-center bg-white rounded-t-lg p-5 mt-4">
        <div className="text-2xl font-bold">Daftar Matakuliah</div>
        <div
          className="cursor-pointer flex items-center space-x-2 py-2 px-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-200"
          onClick={() => setIsListMode(!isListMode)}
        >
          {isListMode ? <TbListCheck size={24} /> : <TbListDetails size={24} />}
        </div>
      </div>
      <hr />
      <div className="bg-white rounded-b-lg py-3 px-5">
        {isListMode ? (
          <SelectedCourseList />
        ) : (
          <SelectedCourseTable setCurrentSKS={setCurrentSKS} />
        )}
      </div>
    </div>
  );
};

export default ProofOfFillingContent;
