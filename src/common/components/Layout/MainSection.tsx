import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface Props {
  children: ReactNode;
}
const MainSection = (props: Props) => {
  return (
    <div className="md:px-10 px-2">
      <div className="flex shadow-app rounded-[3rem]">
        <Sidebar />
        {props.children}
      </div>
    </div>
  );
};

export default MainSection;
