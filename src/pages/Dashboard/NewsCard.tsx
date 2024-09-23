import { News } from "@services/dashboard/entity";
import moment from "moment";
import { BiCalendar } from "react-icons/bi";

interface Props {
  news: News;
}
const NewsCard = (props: Props) => {
  const { news } = props;

  return (
    <div className="bg-white border border-gray-200/60 rounded-md w-full w-[24rem]">
      <div className="py-3 border-b border-gray-200/60">
        <span className="font-semibold text-sm ps-3">{news.title}</span>
      </div>
      <div className="ps-3">
        <span className="text-sm">{news.desc}</span>
      </div>
      <div className="mt-4">
        <img className="w-full h-[17rem] object-cover" src={news.imageURL} />
      </div>
      <div className="ps-3 py-3">
        <span className="font-semibold text-blue-800 text-sm flex items-center gap-2">
          <BiCalendar className="w-4 h-4" />
          {moment(news.createdAt).format("YYYY-MM-DD")}
        </span>
      </div>
    </div>
  );
};

export default NewsCard;
