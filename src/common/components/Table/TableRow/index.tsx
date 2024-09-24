import clsx from "clsx";

interface Props {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onSeeDetail?: () => void;
  onApprove?: () => void;
  onReject?: () => void;
}
function TableRow(props: Props) {
  const { className, children, onClick } = props;

  return (
    <tr
      className={clsx(
        "border-b border-border-secondary font-semibold text-[0.9rem]",
        className,
        onClick && "cursor-pointer ",
      )}
      onClick={onClick}
    >
      {children}
    </tr>
  );
}

export default TableRow;
