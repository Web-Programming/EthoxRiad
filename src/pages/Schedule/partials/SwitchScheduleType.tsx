import { ScheduleType } from "@types";
import { cn } from "@utils/cn";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

type SwitchSheduleTypeProps = {
  type: ScheduleType;
  setType: (type: ScheduleType) => void;
};

const SwitchSheduleType = ({ type, setType }: SwitchSheduleTypeProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (type) {
      searchParams.set("type", type);
    } else {
      searchParams.delete("type");
    }
    navigate({ search: searchParams.toString() }, { replace: true });
  }, [type, navigate, location.search]);

  return (
    <div className="flex flex-col sm:flex-row sm:gap-3 mt-4 border border-dashed border-gray-300 rounded-2xl p-1">
      {["regular", "harian", "mingguan"].map((item) => (
        <div
          key={item}
          className={cn(
            "sm:w-1/3 rounded-2xl font-bold py-2 px-4 text-center",
            type === item
              ? "bg-blue-900 text-white"
              : "bg-white hover:bg-gray-200 cursor-pointer transition-all duration-200",
          )}
          onClick={() => setType(item as ScheduleType)}
        >
          Jadwal {item.charAt(0).toUpperCase() + item.slice(1)}
        </div>
      ))}
    </div>
  );
};

export default SwitchSheduleType;
