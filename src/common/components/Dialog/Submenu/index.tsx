import { Divider } from "@chakra-ui/react";
import clsx from "clsx";
import { useState } from "react";

interface Props {
  title: string;
  subtitle?: string;
  defaultMenu?: number;
  menuContent: Record<string, React.ReactNode>;
}
function Submenu(props: Props) {
  const { title, subtitle, defaultMenu = 0, menuContent } = props;

  const menuList = Object.keys(menuContent);
  const [currentMenu, setCurrentMenu] = useState(menuList[defaultMenu]);

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex flex-col pb-2">
          <span className="text-xl font-semibold">{title}</span>
          <span className="text-sm text-gray-300/60">{subtitle ?? ""}</span>
        </div>
        <div className="flex">
          {menuList.map((menu, index) => (
            <div
              key={index}
              className={clsx(
                "flex h-full px-3 text-sm text-gray-300/60 font-semibold cursor-pointer hover:text-gray-300/80 duration-100",
                currentMenu === menu
                  ? "border-b-2 border-tertiary"
                  : "border-b-2 border-transparent",
              )}
              onClick={() => setCurrentMenu(menu)}
            >
              <span
                className={clsx(
                  "mt-auto pb-4 pt-2",
                  currentMenu === menu && "text-tertiary",
                )}
              >
                {menu}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="border-gray-300 border-opacity-30">
        <Divider />
      </div>
      <div className="mt-4">{menuContent[currentMenu]}</div>
    </div>
  );
}

export default Submenu;
