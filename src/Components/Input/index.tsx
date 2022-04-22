import { TextField } from "@mui/material";
import React from "react";

const styles = { width: "300px" };

interface Props {
  label: string;
  value: any;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Input({ label, value, onChange }: Props) {
  return (
    <TextField
      sx={styles}
      label={label}
      variant="outlined"
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
