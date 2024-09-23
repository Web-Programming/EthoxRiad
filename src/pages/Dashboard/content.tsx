import useNews from "./useNews";
import NewsCard from "./NewsCard";

const DashboardContent = () => {
  const { data } = useNews();

  return (
    <div className="w-full">
      <div className="bg-white p-4 rounded-2xl w-full">
        <h1>Search</h1>
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
