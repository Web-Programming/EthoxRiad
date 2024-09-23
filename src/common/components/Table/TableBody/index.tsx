import clsx from "clsx";
import React from "react";

interface Props {
  header: string[];
  className?: string;
  children: React.ReactNode | React.ReactNode[];
  isVertical?: boolean;
}

function TableBody(props: Props) {
  const { header, className, children, isVertical = false } = props;
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div className="my-5 overflow-x-auto">
      <div className="min-w-full inline-block align-middle">
        <table className="w-full">
          {isVertical ? (
            <tbody className="text-left">
              {header.map((header, index) => (
                <tr key={index}>
                  <th className="uppercase text-xs p-4 border border-secondary">
                    {header}
                  </th>
                  <td className="text-center p-4 border border-secondary">:</td>
                  <td className="p-4 border border-secondary">
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
              <thead className="text-center text-nowrap">
                <tr>
                  {header.map((header, index) => (
                    <th
                      key={index}
                      className="uppercase text-xs p-4 border border-secondary"
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
