export const dateFormatter = (userDate : string) => {
  const inputDate = userDate;
  const date = new Date(inputDate);

  const formattedDate = date.toISOString().split("T")[0];

  return formattedDate;
};
