import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Box } from "@mui/material";

const HealthDatePicker = () => {
  return (
    <Box sx={{ my: 0 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          defaultValue={dayjs(new Date())}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default HealthDatePicker;
