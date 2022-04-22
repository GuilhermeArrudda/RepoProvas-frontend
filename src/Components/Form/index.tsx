import { Box } from "@mui/system";
import React from "react";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  height: "100vh",
};

interface Props {
  children: React.ReactNode;
}

function Form({ children }: Props) {
  return (
    <Box component="form" sx={styles}>
      {children}
    </Box>
  );
}

export default Form;
