import useNews from "./useNews";
import NewsCard from "./NewsCard";
import { GrSearch } from "react-icons/gr";
import { GrRefresh } from "react-icons/gr";
const DashboardContent = () => {
  const { data } = useNews();

  return (
    <div className="w-full">
      <div className="bg-white p-4 rounded-2xl w-full">
        <div className="flex items-center space-x-4">
          <div className="bg-gray-100 rounded-xl p-2 w-60 flex items-center">
            <GrSearch className="mr-2 text-gray-400" />
            <input
              className="bg-transparent flex-1 outline-none"
              type="text"
              placeholder="Cari Judul atau isi berita"
            />
          </div>
          <div className="bg-gray-100 rounded-xl w-10 flex justify-center items-center">
            <button className="m-3">
              <GrRefresh className="text-gray-600"/>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-3 w-full flex flex-wrap justify-around gap-4">
        {data.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default DashboardContent;
