"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import SceduleModal from "./Components/SceduleModal";
import { useState } from "react";

const SchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Box>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Button
          onClick={() => setIsModalOpen(true)}
          sx={{ textTransform: "none" }}
          size="small"
        >
          Create Schedule
        </Button>
        <TextField
          size="small"
          sx={{ textTransform: "none" }}
          placeholder="Search schedule"
        />
      </Stack>
      <SceduleModal open={isModalOpen} setOpen={setIsModalOpen}></SceduleModal>
    </Box>
  );
};

export default SchedulesPage;
