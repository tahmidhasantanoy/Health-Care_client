// "use server"; // it's outside of app folder & i want it as server side
import { FieldValues } from "react-hook-form";

// export const loginPatients = async (data: FormData) => {
export const loginPatients = async (data: FieldValues) => {
  const sendLoginUserData = fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
      // cache: "no-store",
      credentials: "include", // it set refresh token to cookies
    }
  );

  const patientResponseFromServer = (await sendLoginUserData).json();
  return patientResponseFromServer;
};
