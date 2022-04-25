import { TextField } from "@mui/material";
import React from "react";


interface Props {
  label: string;
  value: any;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Input({ label, value, onChange }: Props) {
  return (
    <TextField
      label={label}
      variant="outlined"
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
