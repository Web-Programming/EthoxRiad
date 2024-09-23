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
        <table className="w-full">
          <thead className="text-center text-nowrap">
            <tr>
              {header.map((header, index) => (
                <th
                  key={index}
                  className="uppercase text-2xs p-4 border border-secondary"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={clsx("text-center", className)}>{children}</tbody>
        </table>
      </div>
    </div>
  );
}

export default TableBody;
