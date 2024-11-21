import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type THealthInputs = {
  name: string;
  label?: string;
  placeholder: string;
  required?: boolean; // optional for showing zod errors
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
      control={control} // Controller is a bridge between React component and react-hook-form
      name={name} /* By using this name, we can access the value */
      render={({ field, fieldState: { error } }) => (
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
          error={!!error?.message} // work with boolean type
          helperText={error?.message} //show error message
        />
      )}
    />
  );
};

export default HealthInput;
