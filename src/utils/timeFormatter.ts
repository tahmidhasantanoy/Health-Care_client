import dayjs from "dayjs";

export const timeFormatter = (userTime: string) => {
  const startTime = dayjs(userTime);

  // Format to 24-hour time
  const formattedTime = startTime.format("HH:mm");


  return formattedTime;
};
