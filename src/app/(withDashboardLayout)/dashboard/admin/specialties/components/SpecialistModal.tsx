import FileUpload from "@/components/Forms/FileUploader";
import HealthFormProvider from "@/components/Forms/HealthFormProvider";
import HealthInput from "@/components/Forms/HealthInput";
import Modal from "@/components/shared/Modal/Modal";
import { useCreateSpecialityMutation } from "@/redux/api/specialtiesApi";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TSpecialistProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SpecialistModal = ({ open, setOpen }: TSpecialistProps) => {
  const [createSpeciality] = useCreateSpecialityMutation();

  const handleCreateSpecialist = async (data: FieldValues) => {
    // console.log(data);

    const modifiedAsFormData = modifyPayload(data);
    // console.log(modifiedAsFormData);

    // send to something || want to create a separate api for creating specialist with redux
    try {
      const responseFormSpecialist = await createSpeciality(
        modifiedAsFormData
      ).unwrap();

      if (responseFormSpecialist?.id) {
        setOpen(false);
        toast.success("Specialist created successfully");
      }
      console.log(responseFormSpecialist);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <Modal open={open} setOpen={setOpen} title="Create Speciality">
      <HealthFormProvider
        onSubmit={handleCreateSpecialist}
        defaultValues={{ title: "" }}
        resolver={``}
      >
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <HealthInput
              name="title"
              label="Title"
              placeholder="Enter title"
              required={true}
              type="text"
              size="small"
              fullWidth={true}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <FileUpload name="file" label="File" />{" "}
            {/* Mauy be problem happend */}
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2, ml: "auto" }}
          size="small"
        >
          Create
        </Button>
      </HealthFormProvider>
    </Modal>
  );
};

export default SpecialistModal;
