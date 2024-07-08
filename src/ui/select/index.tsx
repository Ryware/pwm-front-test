import React from "react";
import {
  FormControl,
  InputLabel,
  Select as MUISelect,
  MenuItem,
  FormControlProps,
  SelectChangeEvent,
} from "@mui/material";
import { SelectOption } from "./types";
import { Options } from "@/types";

interface SelectProps extends Omit<FormControlProps, "onChange"> {
  label: string;
  options: SelectOption[];
  value: Options;
  onChange: (event: SelectChangeEvent<Options>) => void;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  ...props
}) => {
  return (
    <FormControl variant="outlined" {...props}>
      <InputLabel>{label}</InputLabel>
      <MUISelect label={label} value={value} onChange={onChange}>
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
};
