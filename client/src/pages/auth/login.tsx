import { Box, Checkbox, FormControlLabel, Grid, Stack, Typography, styled } from "@mui/material";
import AuthWrap from "components/AuthWrap/AuthWrap";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputFieldCommon from "ui/CommonInput/CommonInput";
import CheckedIcon from "ui/Icons/CheckedIcon";
import UNcheckedIcon from "ui/Icons/UNcheckedIcon";
import { OtpVerifiactionWrap } from "./otp-verifiaction";
import { LoginWrap } from "./sign-up";
import { primaryColors } from "Theme/_muiPalette";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useDispatch } from "react-redux";
import { login } from "redux-toolkit/slices/userSlice";



const signInSchema = yup.object().shape({

  email: yup.string().trim().required("email is required"),
  password: yup.string().trim().required("password is required"),


});

export const LoginDataStyle = styled(Box)`
.forgot{
    color: ${primaryColors.color565656};
    text-decoration: none;
    :hover{
        color: ${primaryColors.primary};
    }
    @media (max-width:350px){
      width: 100%;
      margin-top: 10px;
    }
}
.btn_stack{
    margin-top: 30px;
    button{
        min-width: 190px !important;
    }
}
.sing_up{
    margin-top: 20px;
    text-align: center;
    color: ${primaryColors.mainFontColor};
    font-size: 14px;
    a{
        color: ${primaryColors.primary};
        :hover{
            color: ${primaryColors.mainFontColor};
        }
    }
}
`
const Login = () => {

  const [checked,setChecked] = useState(false)

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",

    },
  });


  const dispatch = useDispatch();



  const navigate = useNavigate()



  //sign up functionality---------------->

  const formSubmit = (data:any) => {

    // Object.keys(user).forEach((item) => formData.append(item, user[item]));
    dispatch(login(data) as any)
      .unwrap() // Unwraps the action to get the actual result or error
      .then(() => {
        navigate("/")
      })
      .catch((err:any) => {
        console.log(err);
      });
  };

  return (
    <AuthWrap
      headingText="Welcome to WNO"
      subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    >
   <form onSubmit={handleSubmit(formSubmit)} >
        <Grid container spacing={2.5}>
          <Grid item xs={12}>
          <Controller
              name="email"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { invalid, error },
              }) => (
                <InputFieldCommon
                  placeholder="Enter Email"
                  fullWidth
                  onChange={onChange}
                  value={value}
                  helperText={error?.message}
                  error={invalid}
                />
              )}
            />
       
          </Grid>
          <Grid item xs={12}>
          <Controller
              name="password"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { invalid, error },
              }) => (
                <InputFieldCommon
                  placeholder="Enter Password"
                  fullWidth
                  type="password"
                  onChange={onChange}
                  value={value}
                  helperText={error?.message}
                  error={invalid}
                />
              )}
            />
          </Grid>
        </Grid>
        <LoginDataStyle>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ margin: "20px 0 0" }}
            flexWrap="wrap"
          >
            <FormControlLabel
              className="checked"
              control={
                <Checkbox
                  icon={<UNcheckedIcon />}
                  checkedIcon={<CheckedIcon />}
                  disableRipple
                  onChange={()=>setChecked(!checked)}
                />
              }
              label="Remember me"
            />
            <Link to="/auth/forgot-password" className="forgot">
              Forgot Password?
            </Link>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="center" className='btn_stack'  >
            <CustomButtonPrimary variant='contained' color='primary' type="submit" disabled={!checked}>
            Log In
            </CustomButtonPrimary>
            </Stack>
            <Typography variant="body1" className="sing_up">
            Don’t have an account?   <Link to="/auth/sign-up">Sign Up</Link>
            </Typography>
        </LoginDataStyle>
        </form>
    </AuthWrap>
  );
};

export default Login;
