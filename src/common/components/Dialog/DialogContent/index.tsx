import { ModalBody } from "@chakra-ui/react";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}
function DialogContent(props: Props) {
  const { children, className } = props;

  return (
    <ModalBody
      className={clsx(
        "bg-gray-500 text-white max-h-[40rem] min-h-[15rem] overflow-y-auto w-full",
        className,
      )}
      padding={0}
    >
      <div className="px-10 py-6 border-y border-border-secondary">
        {children}
      </div>
    </ModalBody>
  );
}

export default DialogContent;
