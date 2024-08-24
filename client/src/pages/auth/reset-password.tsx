import React from 'react'
import { Grid, Stack } from '@mui/material'
import AuthWrap from 'components/AuthWrap/AuthWrap'
import InputFieldCommon from 'ui/CommonInput/CommonInput'
import { LoginDataStyle } from './login'
import CustomButtonPrimary from 'ui/CustomButtons/CustomButtonPrimary'
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useDispatch } from "react-redux";
import { useNavigate, useParams } from 'react-router'
import { resetPass } from 'redux-toolkit/slices/userSlice'

const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .trim()
    .required("password is required"),
    password_confirmation: yup
    .string()
    .trim()
    .required("password is required"),
});

const ResetPassword = () => {


  const { handleSubmit, control } = useForm({
    resolver: yupResolver(passwordSchema),
    defaultValues: {
      password: "",
      password_confirmation:""
    },
  });

  const {id} = useParams() 

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmit = (data:any) => {
    console.log("click", data);

    dispatch(resetPass({id,data}) as any).unwrap() 
    .then(() => {
        navigate("/auth/login");
    });
 
  };

  return (
    <AuthWrap headingText="Reset Password" subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
      <form onSubmit={handleSubmit(formSubmit)}>
        

    <Grid container spacing={2.5}>
        <Grid item xs={12} >
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
                  onChange={onChange}
                  value={value}
                  helperText={error?.message}
                  error={invalid}
                />
              )}
            />
      
        </Grid>
        <Grid item xs={12} >
        <Controller
              name="password_confirmation"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { invalid, error },
              }) => (
                <InputFieldCommon
                  placeholder="Enter Password"
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
        <Stack direction="row" alignItems="center" justifyContent="center" className='btn_stack'>
        <CustomButtonPrimary variant='contained' color='primary' type='submit'>
        Submit
        </CustomButtonPrimary>
        </Stack>
        </LoginDataStyle>
        </form>
</AuthWrap>
  )
}

export default ResetPassword