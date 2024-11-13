import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type THealthInputs = {
  name: string;
  label?: string;
  placeholder: string;
  required?: boolean;
  type?: string;
  size?: "small" | "medium";
  fullWidth: boolean;
  sx?: SxProps;
};


const HealthInput = ({
  name,
  label,
  placeholder,
  required,
  type,
  size = "small",
  fullWidth,
  sx,
}: THealthInputs) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name} /* By using this name, we can access the value */
      render={({ field }) => (
        <TextField
          {...field} // spread the field props which comes from input fields
          sx={{ ...sx }}
          label={label}
          placeholder={placeholder}
          required={required}
          type={type}
          size={size}
          fullWidth={fullWidth}
          variant="outlined"
        />
      )}
    />
  );
};

export default HealthInput;
