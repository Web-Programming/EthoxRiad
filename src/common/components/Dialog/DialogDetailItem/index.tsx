import { dateFormatter } from "@utils/formatter";

interface DialogDetailIItemProps {
  label: string;
  data: string | number;
  isTimestamp?: boolean;
  isLink?: boolean;
}

const DialogDetailIItem = ({
  label,
  data,
  isTimestamp,
  isLink,
}: DialogDetailIItemProps) => {
  return (
    <div className="flex flex-col w-full sm:w-auto min-w-40 max-w-64 mx-auto sm:m-0">
      <span className="text-md text-gray-500 font-extrabold">{label}</span>
      {isLink ? (
        <a
          href={data as string}
          target="_blank"
          rel="noreferrer"
          className="text-md text-blue-500 font-semibold break-words cursor-pointer hover:text-blue-700 transition-all duration-200"
        >
          {data}
        </a>
      ) : (
        <span className="text-md text-gray-500 font-semibold break-words">
          {data
            ? isTimestamp && typeof data === "string"
              ? dateFormatter(data)
              : data
            : "-"}
        </span>
      )}
    </div>
  );
};

export default DialogDetailIItem;
