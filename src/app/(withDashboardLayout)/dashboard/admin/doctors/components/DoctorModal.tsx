import HealthFormProvider from "@/components/Forms/HealthFormProvider";
import HealthInput from "@/components/Forms/HealthInput";
import DoctorMainModal from "@/components/shared/Modal/DoctorMainModal";
import { Button, Grid, Typography } from "@mui/material";

interface IDoctorModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}
const DoctorModal = ({ open, setOpen, title }: IDoctorModalProps) => {
  const handleCreateDoctor = (doctorInfo) => {
    console.log(doctorInfo);
  };

  return (
    <>
      <DoctorMainModal open={open} setOpen={setOpen} title={title}>
        <HealthFormProvider
          onSubmit={handleCreateDoctor}
          defaultValues={{ title: "" }}
          resolver={``}
        >
          <Typography textAlign={"center"} variant="h3" my={5}>
            Create doctor with authentic information.
          </Typography>
          <Grid container spacing={2} px={20} py={5}>
            <Grid
              item
              md={1}
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Typography textAlign={"left"} sx={{ align: "bottom" }}>
                Name :
              </Typography>
            </Grid>
            <Grid item md={5} xs={12}>
              <HealthInput
                name="name"
                label="Doctor name"
                placeholder="Enter doctor name"
                fullWidth={true}
              />
            </Grid>
            <Grid
              item
              md={1}
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Typography textAlign={"left"} sx={{ align: "bottom" }}>
                Name :
              </Typography>
            </Grid>
            <Grid item md={5} xs={12}>
              <HealthInput
                name="name"
                label="Doctor name"
                placeholder="Enter doctor name"
                fullWidth={true}
              />
            </Grid>
            <Grid
              item
              md={1}
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Typography textAlign={"left"} sx={{ align: "bottom" }}>
                Name :
              </Typography>
            </Grid>
            <Grid item md={5} xs={12}>
              <HealthInput
                name="name"
                label="Doctor name"
                placeholder="Enter doctor name"
                fullWidth={true}
              />
            </Grid>
            <Grid
              item
              md={1}
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Typography textAlign={"left"} sx={{ align: "bottom" }}>
                Name :
              </Typography>
            </Grid>
            <Grid item md={5} xs={12}>
              <HealthInput
                name="name"
                label="Doctor name"
                placeholder="Enter doctor name"
                fullWidth={true}
              />
            </Grid>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2, ml: "auto" }}
              size="small"
            >
              Create
            </Button>
          </Grid>
        </HealthFormProvider>
      </DoctorMainModal>
    </>
  );
};

export default DoctorModal;
