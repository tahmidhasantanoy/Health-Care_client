import dayjs from "dayjs";

export const timeFormatter = (userTime: string) => {
  const startTime = dayjs(userTime);

  const formattedTime = startTime.format("HH:mm");

  return formattedTime;
};
