import clsx from "clsx";

interface Props {
  className?: string;
  text?: string;
  colspan?: number;
}
function TableEmptyRow(props: Props) {
  const { className, text = "No Data Available", colspan = 3 } = props;

  return (
    <tr className={clsx("border-b border-border-secondary", className)}>
      <td
        colSpan={colspan}
        className="py-5 text-center font-semibold text-yellow-500"
      >
        {text}
      </td>
    </tr>
  );
}

export default TableEmptyRow;
