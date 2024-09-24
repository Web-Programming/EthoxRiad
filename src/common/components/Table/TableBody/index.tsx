import clsx from "clsx";
import React from "react";

interface Props {
  header: string[];
  className?: string;
  children: React.ReactNode | React.ReactNode[];
  isVertical?: boolean;
  isUsingColon?: boolean;
}

function TableBody(props: Props) {
  const {
    header,
    className,
    children,
    isVertical = false,
    isUsingColon = true,
  } = props;
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div className="my-5 overflow-x-auto">
      <div className="min-w-full inline-block align-middle">
        <table className="w-full">
          {isVertical ? (
            <tbody className="text-left">
              {header.map((header, index) => (
                <tr key={index}>
                  <th className="w-1/4 uppercase text-xs p-2 border border-secondary">
                    {header}
                  </th>
                  {isUsingColon && (
                    <td className="w-1/12 text-center p-2 border border-secondary">
                      :
                    </td>
                  )}
                  <td className="w-3/4 p-2 border border-secondary">
                    {childrenArray.map((child, childIndex) => {
                      if (React.isValidElement(child)) {
                        return (
                          <div key={childIndex}>
                            {child.props.children[index]}
                          </div>
                        );
                      }
                      return null;
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <>
              <thead className="text-center text-nowrap font-bold">
                <tr>
                  {header.map((header, index) => (
                    <th
                      key={index}
                      className="uppercase p-4 border border-secondary"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className={clsx("text-center", className)}>
                {childrenArray}
              </tbody>
            </>
          )}
        </table>
      </div>
    </div>
  );
}

export default TableBody;
