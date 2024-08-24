/* eslint-disable react-hooks/rules-of-hooks */
import { Grid, Stack, Typography } from "@mui/material";
import AuthWrap from "components/AuthWrap/AuthWrap";
import React, { useState } from "react";
import InputFieldCommon from "ui/CommonInput/CommonInput";
import { LoginDataStyle } from "./login";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import { useNavigate } from "react-router-dom";
import MuiModalWrapper from "components/CommonModal/CommonModal";
import { LinkModalWrap } from "styles/StyledComponents/ModalStyled";
import assest from "json/assest";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useDispatch } from "react-redux";
import { forgetPass } from "redux-toolkit/slices/userSlice";

const passwordSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("Invalid email format")
    .required("Email is required"),
});

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(passwordSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  const formSubmit = (data: any) => {
    console.log("click", data);

    dispatch(forgetPass(data) as any)
      .unwrap()
      .then(() => {
        handleOpen();
      });
  };

  return (
    <AuthWrap
      headingText="Forgot Password"
      subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    >
        <form onSubmit={handleSubmit(formSubmit)}>
      <Grid container>
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
      </Grid>
      <LoginDataStyle>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          className="btn_stack"
        >
          <CustomButtonPrimary variant="contained" color="primary" type="submit">
            Continue
          </CustomButtonPrimary>
        </Stack>
      </LoginDataStyle>
      </form>
      <MuiModalWrapper onClose={handleClose} open={open} isClose>
        <LinkModalWrap>
          <i>
            <img src={assest.mail_icon} alt="" />
          </i>
          <Typography variant="h3">
            We have sent a link to your email
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur. Congue sed sed eget id
            blandit pretium penatibus quam.
          </Typography>
     
        </LinkModalWrap>
      </MuiModalWrapper>
    </AuthWrap>
  );
};

export default ForgotPassword;
