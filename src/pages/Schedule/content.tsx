import { useState } from "react";
import RegularSchedule from "./partials/RegularSchedule";
import SwitchSheduleType from "./partials/SwitchScheduleType";
import { ScheduleType } from "@types";
import DailySchedule from "./partials/DailySchedule";
import WeeklySchedule from "./partials/WeeklySchedule";

const ScheduleContent = () => {
  const [type, setType] = useState<ScheduleType>("regular");

  return (
    <div className="py-6 px-4">
      <div className="text-2xl font-bold mb-4">Daftar Matakuliah</div>
      <hr />
      <div className="bg-white rounded-lg py-1 px-5">
        <SwitchSheduleType type={type} setType={setType} />
        {type === "regular" && <RegularSchedule />}
        {type === "harian" && <DailySchedule />}
        {type === "mingguan" && <WeeklySchedule />}
      </div>
    </div>
  );
};

export default ScheduleContent;
