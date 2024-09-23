type SearchCourseProps = {
  keyword: string;
  setKeyword: (keyword: string) => void;
};

const SearchCourse = ({ keyword, setKeyword }: SearchCourseProps) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <div className="text-lg font-semibold mb-2">Kode Mata Kuliah</div>
      <div>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default SearchCourse;
