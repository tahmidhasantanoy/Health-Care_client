import HealthFormProvider from "@/components/Forms/HealthFormProvider";
import HealthInput from "@/components/Forms/HealthInput";
import HealthSelectField from "@/components/Forms/HealthSelectField";
import DoctorMainModal from "@/components/shared/Modal/DoctorMainModal";
import { Gender } from "@/types";
import { Button, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";

interface IDoctorModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}
const DoctorModal = ({ open, setOpen, title }: IDoctorModalProps) => {
  const defaultValues = {
    doctor: {
      email: "",
      name: "",
      contactNumber: "",
      address: "",
      registrationNumber: "",
      gender: "",
      experience: 0,
      apointmentFee: 0,
      qualification: "",
      currentWorkingPlace: "",
      designation: "",
      profilePhoto: "",
    },
    password: "",
  };

  const handleCreateDoctor = (doctorInfo: FieldValues) => {
    console.log(doctorInfo);
  };

  return (
    <>
      <DoctorMainModal open={open} setOpen={setOpen} title={title}>
        <HealthFormProvider
          onSubmit={handleCreateDoctor}
          defaultValues={defaultValues}
          resolver={``}
        >
          <Typography textAlign={"center"} variant="h3" my={5}>
            Create doctor with authentic information.
          </Typography>
          <Grid container spacing={2} px={20} py={5}>
            <Grid item xs={12} sm={12} md={4}>
              <HealthInput
                name="doctor.name"
                label="Name"
                placeholder="Name"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <HealthInput
                name="doctor.email"
                type="email"
                placeholder="Email"
                label="Email"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <HealthInput
                name="password"
                type="password"
                placeholder="Password"
                label="Password"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <HealthInput
                name="doctor.contactNumber"
                label="Contract Number"
                placeholder="Contact Number"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <HealthInput
                name="doctor.address"
                label="Address"
                placeholder="Address"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <HealthInput
                name="doctor.registrationNumber"
                label="Registration Number"
                placeholder="Registration Number"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <HealthInput
                name="doctor.experience"
                type="number"
                placeholder="Experience"
                label="Experience"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <HealthSelectField
                items={Gender}
                name="doctor.gender"
                placeholder="Gender"
                label="Gender"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <HealthInput
                name="doctor.apointmentFee"
                type="number"
                placeholder="ApointmentFee"
                label="ApointmentFee"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <HealthInput
                name="doctor.qualification"
                label="Qualification"
                placeholder="Qualification"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <HealthInput
                name="doctor.currentWorkingPlace"
                label="Current Working Place"
                placeholder="Current Working Place"
                fullWidth={true}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <HealthInput
                name="doctor.designation"
                label="Designation"
                placeholder="Designation"
                fullWidth={true}
                sx={{ mb: 2 }}
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
