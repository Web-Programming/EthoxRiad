import { News } from "@services/dashboard/entity";
import DashboardServices from "@services/dashboard/service";

interface HookReturn {
  data: News[];
}
const useNews = (): HookReturn => {
  const dashboardService = new DashboardServices();
  const data = dashboardService.getNews();
  return {
    data,
  };
};

export default useNews;
