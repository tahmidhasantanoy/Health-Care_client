"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import SpecialistModal from "./components/SpecialistModal";
import { useState } from "react";
import { useGetAllSpecialistQuery } from "@/redux/api/specialtiesApi";

const SpecialistPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data : allSpecialist, isLoading, isError } = useGetAllSpecialistQuery({});

  console.log(allSpecialist);


  return (
    <Box>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Button onClick={() => setIsModalOpen(true)}>Create Speciality</Button>
        <SpecialistModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="search speciality"></TextField>
      </Stack>
    </Box>
  );
};

export default SpecialistPage;
