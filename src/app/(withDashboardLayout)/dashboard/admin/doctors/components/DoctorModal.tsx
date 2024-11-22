// DONE
import HealthFormProvider from "@/components/Forms/HealthFormProvider";
import HealthInput from "@/components/Forms/HealthInput";
import HealthSelectField from "@/components/Forms/HealthSelectField";
import Modal from "@/components/shared/Modal/Modal";
import { useCreateDoctorMutation } from "@/redux/api/doctorsApi";
import { Gender } from "@/types";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

interface IDoctorModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}
const DoctorModal = ({ open, setOpen, title }: IDoctorModalProps) => {
  const [createDoctor] = useCreateDoctorMutation();

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

  const handleFormSubmit = async (values: FieldValues) => {
    console.log(values);

    values.doctor.experience = Number(values.doctor.experience);
    values.doctor.apointmentFee = Number(values.doctor.apointmentFee);
    const data = modifyPayload(values);
    try {
      const res = await createDoctor(data).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("Doctor created successfully!!!");
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <>
      <Modal open={open} setOpen={setOpen} title={title}>
        <HealthFormProvider
          onSubmit={handleFormSubmit}
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
      </Modal>
    </>
  );
};

export default DoctorModal;
