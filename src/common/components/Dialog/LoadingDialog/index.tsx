import { ModalBody, ModalOverlay } from "@chakra-ui/react";
import { BaseDialog } from "..";
import hourglass from "@assets/hourglass.gif";

const LoadingDialog = () => {
  return (
    <BaseDialog open={true} onClose={() => {}} closeButton={false}>
      <ModalOverlay bg="blackAlpha.600" />
      <ModalBody
        className={
          "text-black w-full overflow-y-auto flex justify-center items-center"
        }
        padding={0}
      >
        <img
          src={hourglass}
          alt="Loading..."
          style={{ width: "150px", height: "150px" }}
        />
      </ModalBody>
    </BaseDialog>
  );
};

export default LoadingDialog;
