import { useEffect, useState } from "react";
import CourseList from "./partials/CourseList";
import SearchCourse from "./partials/SearchCourse";
import { useLocation } from "react-router-dom";

const PrismaOnlineContent = () => {
  const [keyword, setKeyword] = useState("");
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const keywordParam = searchParams.get("keyword");
    if (keywordParam) {
      setKeyword(keywordParam);
    }
  }, [location.search]);

  return (
    <div className="py-6 px-4">
      <div className="text-2xl font-bold">Bukti Pengisian KRS</div>

      {/* SearchCourse */}
      <div className="bg-white rounded-lg py-1 px-5">
        <SearchCourse keyword={keyword} setKeyword={setKeyword} />
      </div>

      {/* CourseList */}
      <div className="text-2xl font-bold py-4 px-5">Daftar Matakuliah</div>
      <hr />
      <div className="bg-white rounded-lg py-1 px-5">
        <CourseList keyword={keyword} />
      </div>
    </div>
  );
};

export default PrismaOnlineContent;
