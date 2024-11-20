"use client";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import SpecialistModal from "./components/SpecialistModal";
import { useState } from "react";
import {
  useDeleteSpecialistMutation,
  useGetAllSpecialistQuery,
} from "@/redux/api/specialtiesApi";
import { DataGrid, GridColDef, GridDeleteIcon } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import assets from "@/assets/svgs/Cardiology.svg";

const SpecialistPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [deleteSpecialist] = useDeleteSpecialistMutation();
  const {
    data: allSpecialist,
    isLoading,
    isError,
  } = useGetAllSpecialistQuery({});

  // console.log(allSpecialist);

  const handleDelete = async (id: string) => {
    console.log(id);

    try {
      const responseFromSpecialist = await deleteSpecialist(id);
      // console.log(responseFromSpecialist);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "Title",
      headerAlign: "center",
      width: 400,
      align: "center",
    },
    {
      field: "icon",
      headerName: "icon",
      flex: 1,
      renderCell: (row) => {
        return (
          <Box>
            <Image
              src={row?.row.icon == null ? assets : row?.row?.icon}
              alt="icon"
              width={40}
              height={40}
            />
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      headerAlign: "right",
      flex: 1,
      align: "right",
      renderCell: (row) => {
        return (
          <Box>
            <IconButton
              onClick={() => handleDelete(row?.row?.id)}
              aria-label="delete"
              size="medium"
            >
              <GridDeleteIcon fontSize="inherit" />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Button onClick={() => setIsModalOpen(true)}>Create Speciality</Button>
        <SpecialistModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="search speciality" />
      </Stack>
      {!isLoading ? (
        <Box mt={6}>
          <Paper sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={allSpecialist}
              columns={columns}
              sx={{ border: 0 }}
            />
          </Paper>
        </Box>
      ) : (
        <p>Loading...</p>
      )}
    </Box>
  );
};

export default SpecialistPage;
