import { ModalBody } from "@chakra-ui/react";
import { BaseDialog, DialogFooter } from "..";
import { ActionButton } from "@components/Button";

interface Props {
  open: boolean;
  onClose: () => void;
  message: string;
  onConfirm: () => void;
}
const ConfirmDialog = (props: Props) => {
  const { open, onClose, message, onConfirm } = props;

  return (
    <BaseDialog open={open} onClose={onClose}>
      <ModalBody
        className={
          "bg-gray-500 rounded-md text-black w-full min-h-[5rem] overflow-y-auto flex justify-center items-center"
        }
        padding={0}
      >
        <div>
          <span className="text-xl">{message}</span>
        </div>
        <DialogFooter>
          <ActionButton
            label="Cancel"
            className="bg-gray-400 hover:bg-gray-500 shadow-md font-semibold"
            onClick={() => {
              onClose();
            }}
          />
          <ActionButton
            label="Confirm"
            className="bg-gray-400 hover:bg-gray-500 shadow-md font-semibold"
            onClick={() => {
              onConfirm();
            }}
          />
        </DialogFooter>
      </ModalBody>
    </BaseDialog>
  );
};

export default ConfirmDialog;
