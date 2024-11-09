//  Server action function
"use server"; // i also use it in react without "use server", why in nextjs i need to use it ?

export const registerPatients = async (modifyPayload: FormData) => {
  // type : FormData -> Because it modify according to form format

  const reposeFromPatients = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/create-patient`,
    {
      method: "POST",
      body: modifyPayload, // already JSON.stringified || why not use "content-type: application/json" ?
      cache: "no-store",
    }
  );
  const patientResponseFromServer = await reposeFromPatients.json();
  return patientResponseFromServer;
};
