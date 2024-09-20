import { ModalFooter } from "@chakra-ui/react";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}
function DialogFooter(props: Props) {
  const { children, className } = props;

  return (
    <ModalFooter
      className={clsx(
        "bg-gray-500 rounded-b-md text-white max-h-[4rem] overflow-hidden flex justify-end gap-4",
        className,
      )}
    >
      {children}
    </ModalFooter>
  );
}

export default DialogFooter;
