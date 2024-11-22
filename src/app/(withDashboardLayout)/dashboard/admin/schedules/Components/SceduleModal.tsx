import HealthDatePicker from "@/components/Forms/HealthDatePicker";
import HealthFormProvider from "@/components/Forms/HealthFormProvider";
import HealthTimePicker from "@/components/Forms/HealthTimePicker";
import Modal from "@/components/shared/Modal/Modal";
import { dateFormatter } from "@/utils/DateFormatter";
import { timeFormatter } from "@/utils/timeFormatter";
import { Button, Grid, Stack, TextField } from "@mui/material";
import { FieldValues } from "react-hook-form";

interface ISceduleModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const SceduleModal = ({ open, setOpen }: ISceduleModalProps) => {
  const handleDatePicker = (data: FieldValues) => {
    console.log(data);

    data.startDate = dateFormatter(data.startDate);
    data.endDate = dateFormatter(data.endDate);

    data.startTime = timeFormatter(data.startTime);
    data.endTime = timeFormatter(data.endTime);
    console.log(data);

    try {
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <Modal open={open} setOpen={setOpen} title="Create Schedule">
      <Stack direction={"column"} gap={2}>
        <HealthFormProvider
          onSubmit={handleDatePicker}
          defaultValues={{}}
          //   resolver={{}}
        >
          <Grid container spacing={2}>
            <Grid
              textAlign={"end"}
              sx={{ width: "100%" }}
              item
              xl={12}
              md={12}
              xs={6}
            >
              <HealthDatePicker
                name="startDate"
                label="Start Date"
                fullWidth={true}
                size="small"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid
              textAlign={"end"}
              sx={{ width: "100%" }}
              item
              xl={12}
              md={12}
              xs={6}
            >
              <HealthDatePicker
                name="endDate"
                label="End Date"
                fullWidth={true}
                size="small"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid
              textAlign={"end"}
              sx={{ width: "100%" }}
              item
              xl={6}
              md={12}
              xs={6}
            >
              <HealthTimePicker name={"startTime"} />
            </Grid>
            <Grid
              textAlign={"end"}
              sx={{ width: "100%" }}
              item
              xl={6}
              md={12}
              xs={6}
            >
              <HealthTimePicker name={"endTime"} />
            </Grid>

            <Grid item md={6} xs={6}></Grid>
            <Grid textAlign={"end"} item md={6} xs={6}>
              <Button type="submit" variant="contained">
                Create
              </Button>
            </Grid>
          </Grid>
        </HealthFormProvider>
      </Stack>
    </Modal>
  );
};

export default SceduleModal;
