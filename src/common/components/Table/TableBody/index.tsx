import clsx from "clsx";

interface Props {
  header: string[];
  className?: string;
  children: React.ReactNode;
}

function TableBody(props: Props) {
  const { header, className, children } = props;

  return (
    <div className="my-5 overflow-x-auto">
      <div className="min-w-full inline-block align-middle">
        <table className="w-full table-fixed min-w-[1000px]">
          <thead className="text-left border-b border-border-secondary text-nowrap">
            <tr>
              {header.map((header, index) => (
                <th
                  key={index}
                  className="uppercase text-2xs py-4 text-blue-300 px-4"
                >
                  {header}
                </th>
              ))}
              <th className="w-[10rem]" />
            </tr>
          </thead>
          <tbody className={clsx("text-left", className)}>{children}</tbody>
        </table>
      </div>
    </div>
  );
}

export default TableBody;
