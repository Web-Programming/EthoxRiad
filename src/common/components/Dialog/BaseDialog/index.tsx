import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { cn } from "@utils/cn";

interface Props {
  open: boolean;
  onClose: () => void;
  title?: string;
  closeButton?: boolean;
  maxWidth?: string;
  statusBgColor?: string;
  statusName?: string;
  children: React.ReactNode;
}
function BaseDialog(props: Props) {
  const {
    open,
    onClose,
    title,
    closeButton = false,
    maxWidth,
    statusBgColor,
    statusName,
    children,
  } = props;
  return (
    <div className="z-50">
      <Modal isOpen={open} onClose={onClose} isCentered>
        <ModalOverlay bg="rgba(110, 110, 110, 0.3)" zIndex={900} />
        <ModalContent
          containerProps={{
            zIndex: 900,
          }}
          bg="none"
          className="min-w-[100%] sm:min-w-[90%] md:min-w-[80%] lg:min-w-[75%] xl:min-w-[70%]"
          // minWidth="fit-content"
          maxHeight="fit-content"
          maxW={maxWidth}
        >
          {title ? (
            <ModalHeader
              className="bg-gray-500 rounded-t-md text-white"
              fontSize={16}
            >
              <div className="flex items-center gap-4">
                <p>{title}</p>
                {statusBgColor && statusName && (
                  <p
                    className={cn(
                      statusBgColor,
                      "font-semibold rounded-md py-2 px-1",
                    )}
                  >
                    {statusName}
                  </p>
                )}
              </div>
            </ModalHeader>
          ) : null}
          {!closeButton ? null : (
            <ModalCloseButton className="text-white border mt-[0.45rem] me-1 border-border-primary bg-white" />
          )}
          {children ?? null}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default BaseDialog;
