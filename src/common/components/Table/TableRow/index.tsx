import clsx from "clsx";
import { TiArrowForward } from "react-icons/ti";
import { FcApproval, FcDisclaimer } from "react-icons/fc";
import { HiPencil, HiTrash } from "react-icons/hi";

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
  const {
    className,
    children,
    onClick,
    onEdit,
    onDelete,
    onSeeDetail,
    onApprove,
    onReject,
  } = props;

  return (
    <tr
      className={clsx(
        "border-b border-border-secondary font-semibold text-[0.9rem] hover:bg-gray-100 hover:text-gray-400 transition-all duration-200",
        className,
        onClick && "cursor-pointer ",
      )}
      onClick={onClick}
    >
      {children}
      <td className="flex gap-4 justify-center pe-5 text-gray-300/80 py-5">
        {onEdit && (
          <HiPencil
            size={28}
            onClick={onEdit}
            className="cursor-pointer hover:text-yellow-300/80 duration-100"
          />
        )}

        {onDelete && (
          <HiTrash
            size={28}
            onClick={onDelete}
            className="cursor-pointer hover:text-red-400/90 duration-100"
          />
        )}

        {onSeeDetail && (
          <TiArrowForward
            size={28}
            onClick={onSeeDetail}
            className="text-blue-500 hover:text-blue-700 cursor-pointer duration-100
          "
          >
            See Detail
          </TiArrowForward>
        )}

        {onApprove && (
          <FcApproval size={28} onClick={onApprove} className="cursor-pointer">
            Approve
          </FcApproval>
        )}

        {onReject && (
          <FcDisclaimer size={28} onClick={onReject} className="cursor-pointer">
            Reject
          </FcDisclaimer>
        )}
      </td>
    </tr>
  );
}

export default TableRow;
