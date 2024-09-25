import { NewsModel } from "@models/dashboard";
import DashboardServices from "../../api/dashboard/service";

interface HookReturn {
  data: NewsModel[];
}
const useNews = (): HookReturn => {
  const dashboardService = new DashboardServices();
  const data = dashboardService.getNews();
  return {
    data,
  };
};

export default useNews;
