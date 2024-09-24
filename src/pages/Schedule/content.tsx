import { useEffect, useState } from "react";
import RegularSchedule from "./partials/RegularSchedule";
import SwitchSheduleType from "./partials/SwitchScheduleType";
import { ScheduleType } from "@types";
import DailySchedule from "./partials/DailySchedule";
import WeeklySchedule from "./partials/WeeklySchedule";
import { useLocation } from "react-router-dom";

const ScheduleContent = () => {
  const [type, setType] = useState<ScheduleType | "">("");
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const typeParam = searchParams.get("type");
    if (typeParam) {
      setType(typeParam as ScheduleType);
    }
  }, [location.search]);

  return (
    <div className="w-full">
      <div className="bg-white p-4 rounded-2xl w-full">
        <SwitchSheduleType type={type} setType={setType} />
        {type === "harian" ? (
          <DailySchedule />
        ) : type === "mingguan" ? (
          <WeeklySchedule />
        ) : (
          <RegularSchedule />
        )}
      </div>
    </div>
  );
};

export default ScheduleContent;
