import HealthDatePicker from "@/components/Forms/HealthDatePicker";
import Modal from "@/components/shared/Modal/Modal";
import { Button, Grid, Stack, TextField } from "@mui/material";

interface ISceduleModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const SceduleModal = ({ open, setOpen }: ISceduleModalProps) => {
  return (
    <Modal open={open} setOpen={setOpen} title="Create Schedule">
      <Stack direction={"column"} gap={2}>
        <Grid container spacing={2}>
          <Grid textAlign={"end"} sx={{ width: "100%" }} item xl={12} md={12} xs={6}>
            <HealthDatePicker />
          </Grid>

          <Grid item md={6} xs={6}></Grid>
          <Grid textAlign={"end"} item md={6} xs={6}>
            <Button variant="contained">Create</Button>
          </Grid>
        </Grid>
      </Stack>
    </Modal>
  );
};

export default SceduleModal;
