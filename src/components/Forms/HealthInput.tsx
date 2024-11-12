import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type THealthInputs = {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth: boolean;
};

const HealthInput = ({
  name,
  label,
  type,
  size = "small",
  fullWidth,
}: THealthInputs) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name} /* By using this name, we can access the value */
      render={({ field }) => (
        <TextField
          {...field} // spread the field props
          label={label}
          type={type}
          variant="outlined"
          size={size}
          fullWidth={fullWidth}
        />
      )}
    />
  );
};

export default HealthInput;
