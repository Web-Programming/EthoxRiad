import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  header?: ReactNode;
}
const ContentWrapper = (props: Props) => {
  return (
    <div className="w-full bg-secondary min-h-[85vh]">
      <div className="bg-content rounded-2xl px-6 py-4 h-full">
        <div className="flex justify-between rounded-2xl items-center py-7">
          <span className="text-slate-800/90 font-bold text-xl">
            {props.title}
          </span>
          <div>{props.header}</div>
        </div>
        <div className="flex bg-content rounded-2xl overflow-hidden">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default ContentWrapper;
