import { Tooltip } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { GrSchedules } from "react-icons/gr";
import { useSidebar } from "@store/sidebar";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import useWindowSize from "@hooks/useWindowSize";

const Sidebar = () => {
  const currentMenu = useSidebar();
  const iconClass = "w-5 h-5 text-white ";
  const navigate = useNavigate();
  const { md } = useWindowSize();

  const sidebarItems = [
    {
      title: "Dashboard",
      route: "/",
      icon: <RxDashboard className={iconClass} />,
    },
    {
      title: "Perkuliahan",
      route: "/jadwal-perkuliahan",
      icon: <GrSchedules className={iconClass} />,
    },
  ];

  const handleClick = (index: number) => {
    currentMenu.setMenu(index);
    navigate(sidebarItems[index].route);
  };

  return (
    <div className="bg-secondary rounded-s-3xl md:w-56 w-24 flex flex-col items-center py-12 gap-1">
      {sidebarItems.map((item, index) => (
        <div key={index} className="w-full h-12 px-4">
          <Tooltip
            hasArrow
            label={!md && item.title}
            placement="end"
            className="bg-slate-800 text-white px-2 py-1 rounded-md text-sm"
          >
            <button
              className={clsx(
                "w-full h-full flex items-center justify-left rounded-lg",
                currentMenu.menu === index
                  ? "bg-blue-500/40"
                  : "hover:bg-blue-500/20",
              )}
              onClick={() => handleClick(index)}
            >
              <span className="flex gap-2 items-center ps-4">
                {item.icon}
                {md && (
                  <span className="text-white text-sm font-semibold">
                    {item.title}
                  </span>
                )}
              </span>
            </button>
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
