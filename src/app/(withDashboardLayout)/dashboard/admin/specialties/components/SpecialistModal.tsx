import HealthFormProvider from "@/components/Forms/HealthFormProvider";
import HealthInput from "@/components/Forms/HealthInput";
import Modal from "@/components/shared/Modal/Modal";
import { Grid, TextField } from "@mui/material";
import { FieldValues } from "react-hook-form";

type TSpecialistProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SpecialistModal = ({ open, setOpen }: TSpecialistProps) => {
  console.log(open);

  const handleCreateSpecialist = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Modal open={open} setOpen={setOpen} title="Create Speciality">
      <HealthFormProvider
        onSubmit={handleCreateSpecialist}
        defaultValues={{ name: "" }}
        resolver={``}
      >
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <HealthInput
              name="name"
              label="Name"
              placeholder="Enter name"
              required={true}
              type="text"
              size="small"
              fullWidth={true}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <HealthInput
              name="name"
              label="Name"
              placeholder="Enter name"
              required={true}
              type="text"
              size="small"
              fullWidth={true}
            />
          </Grid>
        </Grid>
      </HealthFormProvider>
    </Modal>
  );
};

export default SpecialistModal;
