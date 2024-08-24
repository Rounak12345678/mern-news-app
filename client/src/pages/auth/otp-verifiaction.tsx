import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid, Stack, TextField, Typography, styled } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";
import AuthWrap from "components/AuthWrap/AuthWrap";
import { parseCookies } from "nookies";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { otpVerification, resendOtp } from "redux-toolkit/slices/userSlice";
import OtpInput from "react-otp-input";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import * as yup from "yup";
import InputFieldCommon from "ui/CommonInput/CommonInput";

export const OtpVerifiactionWrap = styled(Box)`
  max-width: 296px;
  margin: 0 auto;
  .otp_input {
    .MuiInputBase-root {
      padding-left: 25px;
      @media (max-width: 329px) {
        padding-left: 20px;
      }
    }
  }
  .btn_stack {
    button {
      min-width: 190px !important;
      margin-top: 30px;
    }
  }
  .sing_up {
    margin-top: 20px;
    text-align: center;
    color: ${primaryColors.mainFontColor};
    font-size: 14px;
    a {
      color: ${primaryColors.primary};
      :hover {
        color: ${primaryColors.mainFontColor};
      }
    }
  }
  input {
    width: calc(100% / 6) !important;
    margin: 0 2px;
    height: 50px;
  }
`;

const otpSchema = yup.object().shape({
  number: yup.string().trim().required("number is required"),
});

const OtpVerifiaction = () => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(otpSchema),
    defaultValues: {
      number: "",
    },
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const formSubmit = (data: any) => {
    const cookies = parseCookies();
    const userId = cookies?.userId;

    const payload = {
      id: userId,
      otp: data.number,
    };
    dispatch(otpVerification(payload) as any)
      .unwrap() // Unwraps the action to get the actual result or error
      .then(() => {
        navigate("/");
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const otpResend = ()=>{
    const cookies = parseCookies();
    const userId:any = cookies?.userId;

    const body:any = {
        id:userId
    }
    dispatch(resendOtp(body) as any).unwrap().then(() => {
       console.log('success')
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  return (
    <AuthWrap
      headingText="Enter OTP"
      subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    >
      <OtpVerifiactionWrap>
        <form onSubmit={handleSubmit(formSubmit)}>
          <Grid container spacing={2.5} justifyContent="center">
            <Grid item xs={12}>
              <Controller
                name="number"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { invalid, error },
                }) => (
                  <OtpInput
                    value={value}
                    onChange={onChange}
                    numInputs={6}
                    renderInput={(props) => <input {...props} />}
                  />
                )}
              />
            </Grid>
          </Grid>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            className="btn_stack"
          >
            <CustomButtonPrimary
              variant="contained"
              color="primary"
              type="submit"
            >
              Continue
            </CustomButtonPrimary>
          </Stack>
          <Typography variant="body1" className="sing_up">
            Don’t received OTP ? <Link to="#" onClick={otpResend} >Resend</Link>
          </Typography>
        </form>
      </OtpVerifiactionWrap>
    </AuthWrap>
  );
};

export default OtpVerifiaction;
