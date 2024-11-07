"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerPatients } from "@/services/actions/registerPatients";
import { modifyPayload } from "@/utils/modifyPayload";
import { toast } from "sonner";

// type RegisterInfo = {
//   name: string;
//   email: string;
//   password: string;
//   contactNumber: number;
//   address: string;
// };

interface IPatient {
  name: string;
  email: string;
  contactNumber: string; // change to string
  address: string;
}

interface IRegisterInfo {
  password: string;
  patient: IPatient;
}

const RegisterPage = () => {
  const { handleSubmit, register } = useForm<IRegisterInfo>();

  const onSubmit: SubmitHandler<IRegisterInfo> = async (data) => {
    // console.log(data);

    // Modify form data for sending to the server
    const modifiedData = modifyPayload(data);
    console.log(modifiedData);

    // Sending from data to the server || Why i send modified data to another function rather
    // than directly sending data to the server ?
    try {
      const patientResponseFromServer = await registerPatients(modifiedData);
      if (patientResponseFromServer.success) {
        toast.success(patientResponseFromServer.message);
      }
    } catch (err: any) {
      console.log(err.message);
      toast.error(err.message);
    }
  };
  return (
    <Container>
      <Stack
        sx={{ height: "100vh" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            padding: 4,
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <Stack justifyContent={"center"} alignItems={"center"}>
            <Box>
              <Image
                src={assets.svgs.logo}
                alt="choose us image"
                height={50}
                width={50}
              />
            </Box>
            <Box>
              <Typography variant="h6" component={"h6"} fontWeight={600}>
                Patient Registration
              </Typography>
            </Box>
          </Stack>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2} my={2}>
                <Grid item md={12}>
                  <TextField
                    {...register("patient.name")}
                    label="Name"
                    type="text"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    {...register("patient.email")}
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    {...register("password")}
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    {...register("patient.contactNumber")}
                    label="Contact Number"
                    type="number"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    {...register("patient.address")}
                    label="Address"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={12}>
                  <Button type="submit" fullWidth>
                    Register
                  </Button>
                </Grid>
                <Grid item md={12}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography>
                      Do you have an account?{" "}
                      <Link color="primary.main" href={"/login"}>
                        Login
                      </Link>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
