/* eslint-disable no-nested-ternary */
/* eslint-disable react/require-default-props */

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
// eslint-disable-next-line import/order
import VisibilityIcon from "@mui/icons-material/Visibility";
import TextField, { StandardTextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/system";

import React, { forwardRef } from "react";
import { primaryColors } from "Theme/_muiPalette";
import { Typography } from "@mui/material";

const InputWrap = styled(TextField as any)`
  .MuiInputBase-adornedEnd {
    height: auto;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    color: var(--white);
    padding: 0px 16px;
    border: 1px solid rgb(45, 45, 45,0.2);
    background: ${primaryColors?.white};
   
   min-width: 100%;
border-radius: 6px;
min-height: 60px;
    @media (max-width: 599px) {
      padding: 0px 10px;
      min-height: 50px;
    }

    input[type="text"],
    input[type="email"],
    input[type="url"],
    input[type="password"],
    input[type="search"],
    input[type="number"],
    input[type="tel"],
    input[type="range"],
    input[type="date"],
    input[type="month"],
    input[type="week"],
    input[type="time"],
    input[type="datetime"],
    input[type="datetime-local"],
    input[type="color"],
    textarea {
      color: ${primaryColors?.textPrimaryColor};
      border: 0;
      padding-left: 0;
      
      &::placeholder {
        color: ${primaryColors?.mainFontColor};
        opacity: 1;
        font-size: 14px;
      }
      &:focus {
        border: 0;
        background: transparent;
      }
    }
    textarea {
      /* height: 125px !important;
      padding: 20px 10px 20px 51px; */
      @media (max-width: 600px) {
        padding: 20px 0px 20px;
      }
    }
    &.Mui-error {
      input[type="text"],
      input[type="email"],
      input[type="url"],
      input[type="password"],
      input[type="search"],
      input[type="number"],
      input[type="tel"],
      input[type="range"],
      input[type="date"],
      input[type="month"],
      input[type="week"],
      input[type="time"],
      input[type="datetime"],
      input[type="datetime-local"],
      input[type="color"],
      textarea {
        border-color: ${primaryColors?.errorMain};
      }
    }
    .MuiOutlinedInput-notchedOutline {
      display: none;
      /* border-color: var(--primaryD3D7DF); */
    }
    #outlined-adornment-password {
      border: 0;
      padding: 0;
      height: 39px;
      font-size: 16px;
      &::placeholder {
        color: ${primaryColors?.mainFontColor};
        opacity: 1;
      }
    }
    button {
      background-color: transparent;
      color: var(--textPrimaryColor);
      padding: 0;
      &:focus {
        background-color: transparent;
        color: var(--textPrimaryColor);
      }
      &:hover {
        background-color: transparent;
        color: var(--textPrimaryColor);
      }
      img {
        position: static !important;
        transform: inherit !important;
        top: 0;
        left: 0;
        width: 20px;
      }
      svg {
        font-size: 20px;
      }
    }
  }
`;

type InputFieldCommonProps = StandardTextFieldProps & {
  isPassword?: boolean;
  adorMentIcon?: JSX.Element;
  inputHead?:string;
  isHeading?:boolean;
};

const InputFieldCommon = forwardRef<HTMLInputElement, InputFieldCommonProps>(
  ({ isPassword = false, adorMentIcon,inputHead,isHeading, ...others }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      event.preventDefault();
    };
    return (
      <>
      {isHeading&&
      <Typography variant="body1" className="input_head">
      {inputHead}
    </Typography>
      }
      
      <InputWrap
        fullWidth
        variant="outlined"
        {...others}
        type={isPassword ? (showPassword ? "text" : "password") : others?.type}
        InputProps={{
          inputRef: ref,
          endAdornment: isPassword ? (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                disableRipple
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          ) : (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                disableRipple
              >
                {/* <SearchRoundedIcon/> */}
                {adorMentIcon}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      </>
    );
  }
);

export default InputFieldCommon;
