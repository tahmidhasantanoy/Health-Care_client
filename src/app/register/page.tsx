"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { registerPatients } from "@/services/actions/registerPatients";
import { modifyPayload } from "@/utils/modifyPayload";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginPatients } from "@/services/actions/loginPatients";
import { setTokenToLocalStorage } from "@/services/auth.services";
import HealthFormProvider from "@/components/Forms/HealthFormProvider";
import HealthInput from "@/components/Forms/HealthInput";

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
  contactNumber: string;
  address: string;
}

interface IRegisterInfo {
  password: string;
  patient: IPatient;
}

const RegisterPage = () => {
  const router = useRouter();
  // const { handleSubmit, register } = useForm<IRegisterInfo>();

  const onSubmitHandleRegister = async (data: FieldValues) => {
    console.log("register page -> 2", data);

    // Modify form data for sending to the server
    const modifiedData = modifyPayload(data);

    // Sending from data to the server || Why i send modified data to another function rather
    // than directly sending data to the server ?
    try {
      const patientResponseFromServer = await registerPatients(modifiedData);
      console.log(
        "register page -> patientResponseFromServer 3",
        patientResponseFromServer
      );
      if (patientResponseFromServer.success) {
        try {
          const patientResponseFromLoginServer = await loginPatients({
            email: data?.patient?.email,
            password: data.password,
          });
          if (patientResponseFromLoginServer?.data?.accessToken) {
            setTokenToLocalStorage(
              patientResponseFromLoginServer?.data?.accessToken
            );
            toast.success(patientResponseFromServer.message);
            router.push("/");
          }
        } catch (err: any) {
          console.log(err.message);
          toast.error(err.message);
        }
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
                priority
              />
            </Box>
            <Box>
              <Typography variant="h6" component={"h6"} fontWeight={600}>
                Patient Registration
              </Typography>
            </Box>
          </Stack>
          <Box>
            <HealthFormProvider onSubmit={onSubmitHandleRegister}>
              <Grid container spacing={2} my={2}>
                <Grid item md={12}>
                  <HealthInput
                    name="patient.name"
                    label="Name"
                    placeholder="Enter your name"
                    type="text"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <HealthInput
                    name="patient.email"
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <HealthInput
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <HealthInput
                    name="patient.contactNumber"
                    label="Contact Number"
                    placeholder="Type your number"
                    type="number"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <HealthInput
                    name="patient.address"
                    label="Address"
                    placeholder="Enter your address"
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
            </HealthFormProvider>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
