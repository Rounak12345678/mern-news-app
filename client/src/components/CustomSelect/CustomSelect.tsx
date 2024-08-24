import {
  FormControl,
  IconButton,
  MenuItem,
  styled,
  Typography,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectProps } from "@mui/material/Select";
import { useState } from "react";
import { FormControlWrapper } from "styles/StyledComponents/FormControlWrapper";
import { primaryColors } from "Theme/_muiPalette";
import DropdownIcon2 from "ui/Icons/DropdownIcon2";

const CustomSelectWrapper = styled(Select)`
  &.MuiInputBase-root {
    background-color: rgb(255, 255, 255, 0.15);
    width: 100%;
    border-radius: 6px;
    border: 1px solid rgb(45, 45, 45, 0.2);
    padding: 16.5px 14px;
    min-width: 177px;
    min-height: 60px;
    .MuiSelect-iconOutlined {
    }
    .Mui-focused {
      border: none;
    }

    .MuiSelect-select {
      padding: 0;
      /* padding-right: 40px; */
      /* color: ${primaryColors.white}; */
      color: ${primaryColors.secondary};
      font-size: 14px;
      font-weight: 400;
      text-align: left;
    }

    fieldset {
      display: none;
    }
    .MuiSelect-icon {
      padding: 0;
      line-height: 0;
      top: 50%;
      transform: translateY(-50%);
      right: 20px;
    }
  }
  .menu_item {
    &.MuiMenuItem-root {
      color: ${primaryColors.black};
    }
  }
`;
interface CustomSelectProps {
  initialValue: string;
  label?: string;
  isLabel?:boolean;
  icon?:any;
}
const CustomSelect: React.FC<CustomSelectProps & SelectProps> = ({
  initialValue,
  label,
  isLabel,
  icon,

  ...props
}) => {
  const MenuProps = {
    PaperProps: {
      style: {
        width: "auto",
        // backgroundColor:"#000"
      },
    },
  };

  const [value, setValue] = useState("");

  const handleChange = (event: any) => {
    setValue(event.target.value as string);
  };

  return (
    <FormControlWrapper>
      {!isLabel&&(
         <Typography variant="body1" className="input_head">
         {label}
       </Typography>
      )}
     
      <CustomSelectWrapper
        displayEmpty
        input={<OutlinedInput />}
        IconComponent={(props) => {
          return (
            <IconButton {...props}>
             {icon|| <DropdownIcon2 />} 
            </IconButton>
          );
        }}
        value={value}
        onChange={handleChange}
        MenuProps={MenuProps}
        inputProps={{ "aria-label": "Without label" }}
        {...props}
      >
        <MenuItem value="" sx={{ display: "none" }}>
          {initialValue}
        </MenuItem>
        {props.children}
      </CustomSelectWrapper>
    </FormControlWrapper>
  );
};

export default CustomSelect;
