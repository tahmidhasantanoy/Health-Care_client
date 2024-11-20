"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import DoctorModal from "./components/DoctorModal";
import { useState } from "react";

const DoctorsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Box>
      <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
        <Button
          onClick={() => setIsModalOpen(true)}
          size="small"
          sx={{ textTransform: "none" }}
        >
          Create doctor
        </Button>
        <TextField size="small" placeholder="Search doctor" />
      </Stack>
      <DoctorModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title="Create a doctor"
      />
    </Box>
  );
};

export default DoctorsPage;
