import schedulesData from "./data";

export default class ScheduleService {
  get() {
    return schedulesData;
  }

  getById(id: number) {
    return schedulesData.find((schedule) => schedule.id === id);
  }
}
