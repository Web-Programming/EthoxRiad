import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface Props {
  children: ReactNode;
}
const MainSection = (props: Props) => {
  return (
    <div className="px-10">
      <div className="flex shadow-app rounded-[3rem]">
        <Sidebar />
        {props.children}
      </div>
    </div>
  );
};

export default MainSection;
