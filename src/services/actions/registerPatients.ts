"use server"; // use so that it render as server side || i know if you not declare anything
// it will render as server side

export const registerPatients = async (modifyPayload: FormData) => {
  // Because it modify according to form format

  console.log(process.env.NEXT_PUBLIC_BACKEND_API_URL);
  const reposeFromPatients = await fetch(
    `http://localhost:5000/api/v1/user/create-patient`,
    {
      method: "POST",
      body: modifyPayload, // already JSON.stringified
      cache: "no-store",
    }
  );
  const patientResponseFromServer = await reposeFromPatients.json();
  return patientResponseFromServer;
};
