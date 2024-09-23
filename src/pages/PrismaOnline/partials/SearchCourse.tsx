import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

type SearchCourseProps = {
  keyword: string;
  setKeyword: (keyword: string) => void;
};

const SearchCourse = ({ keyword, setKeyword }: SearchCourseProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (keyword) {
      searchParams.set("keyword", keyword);
    } else {
      searchParams.delete("keyword");
    }
    navigate({ search: searchParams.toString() }, { replace: true });
  }, [keyword, navigate, location.search]);

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <div className="text-lg font-semibold mb-2">Kode Mata Kuliah</div>
      <div>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Cari kode atau nama mata kuliah"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default SearchCourse;
