import { Inputs } from "../app/login/page";

export const loginPatients = (values: Inputs) => {
  const obj = { ...values };
  const data = JSON.stringify(obj);
  return data;
};
