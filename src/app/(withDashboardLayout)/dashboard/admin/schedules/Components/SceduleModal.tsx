import HealthDatePicker from "@/components/Forms/HealthDatePicker";
import HealthFormProvider from "@/components/Forms/HealthFormProvider";
import HealthTimePicker from "@/components/Forms/HealthTimePicker";
import Modal from "@/components/shared/Modal/Modal";
import { useCreateDoctorMutation } from "@/redux/api/doctorsApi";
import { dateFormatter } from "@/utils/DateFormatter";
import { timeFormatter } from "@/utils/timeFormatter";
import { Button, Grid, Stack, TextField } from "@mui/material";
import { FieldValues } from "react-hook-form";

interface ISceduleModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const SceduleModal = ({ open, setOpen }: ISceduleModalProps) => {
  const [createSchedule] = useCreateDoctorMutation();
  const handleDatePicker = async (values: FieldValues) => {
    console.log(values);

    values.startDate = dateFormatter(values.startDate);
    values.endDate = dateFormatter(values.endDate);
    values.startTime = timeFormatter(values.startTime);
    values.endTime = timeFormatter(values.endTime);
    console.log(values);

    /* 
    startDate: '2024-11-23',
    endDate: '2024-11-23',
    startTime: '15:00',
    endTime: '16:00'

    startDate: '2024-11-23',
    endDate: '2024-11-23',
    startTime: '15:00',
    endTime: '16:00'
    */

    try {
      const responseFromSchedule = await createSchedule(values).unwrap();
      console.log(responseFromSchedule); // ERROR :Unexpected token u in JSON at position 0
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
