import * as React from "react";
import { SxProps } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Controller, useFormContext } from "react-hook-form";

type TFileUploaderProps = { name: string; label?: string; sx?: SxProps };
export default function FileUpload({ name, label, sx }: TFileUploaderProps) {
  const { control } = useFormContext();

  return (
    <Controller
      /* 33-5 Controller acts as a bridge between React component and react-hook-form */
      name={name} // field's key
      control={
        control
      } /* Passes the "form control object" from useForm to the Controller */
      render /* Render is a function */={({
        field: { onChange, value, ...field },
      }) => {
        return (
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{ ...sx }}
          >
            {label || "Upload files"}
            <input
              {...field}
              value={value?.fileName}
              type="file"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onChange((e.target as HTMLInputElement)?.files?.[0]);
              }}
              style={{ display: "none" }}
            />
          </Button>
        );
      }}
    />
  );
}
