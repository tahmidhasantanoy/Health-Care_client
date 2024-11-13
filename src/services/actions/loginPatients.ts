"use server";
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
      cache: "no-store",
    }
  );

  const patientResponseFromServer = (await sendLoginUserData).json();
  return patientResponseFromServer;
};
