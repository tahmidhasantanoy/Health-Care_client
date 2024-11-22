import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Controller, useFormContext } from "react-hook-form";
import { SxProps } from "@mui/material";

interface IHealthDatePickerProps {
  name: string;
  label?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
}

const HealthDatePicker = ({
  name,
  sx,
  size,
  label,
  fullWidth,
}: IHealthDatePickerProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value, ...field },
        fieldState: { error },
      }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label={label}
              defaultValue={dayjs(new Date())}
              timezone="system"
              disablePast
              slotProps={{
                textField: {
                  size: size,
                  label: label,
                  fullWidth: fullWidth,
                  sx: {
                    ...sx,
                  },
                },
              }}
              {...field}
              value={value ? dayjs(value) : dayjs()} // Convert value to Day.js //TypeError: value.isValid is not a function
              onChange={(dateInfo) => onChange(dateInfo)}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default HealthDatePicker;
