import Modal from "@/components/shared/Modal/Modal";
import { TextField } from "@mui/material";

type TSpecialistProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SpecialistModal = ({ open, setOpen }: TSpecialistProps) => {
  console.log(open);

  return (
    <Modal open={open} setOpen={setOpen} title="Create Speciality">
      <TextField />
    </Modal>
  );
};

export default SpecialistModal;
