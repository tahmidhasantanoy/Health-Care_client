import Modal from "@/components/shared/Modal/Modal";
import { Box, Button, Stack, TextField } from "@mui/material";

const SpecialistPage = () => {
  return (
    <Box>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Button>Create Speciality</Button>
        <Modal />
        <TextField size="small" placeholder="search speciality"></TextField>
      </Stack>
    </Box>
  );
};

export default SpecialistPage;
