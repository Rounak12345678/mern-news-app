import { Box, Checkbox, FormControlLabel, Grid, Stack, Typography, styled } from "@mui/material"
import { primaryColors } from "Theme/_muiPalette"
import AuthWrap from "components/AuthWrap/AuthWrap"
import MuiModalWrapper from "components/CommonModal/CommonModal"
import assest from "json/assest"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { LinkModalWrap } from "styles/StyledComponents/ModalStyled"
import InputFieldCommon from "ui/CommonInput/CommonInput"
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary"
import CheckedIcon from "ui/Icons/CheckedIcon"
import UNcheckedIcon from "ui/Icons/UNcheckedIcon"
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ISignUp } from "interfaces/interfaces"
import { useDispatch } from "react-redux"
import { signup } from "redux-toolkit/slices/userSlice"
import { useAppDispatch } from "hooks/redux/useAppDispatch"
import { AppDispatch } from "redux-toolkit/store/store"



export const LoginWrap = styled(Box)`
.button_primary{
    min-width: 190px !important;
    margin-top: 30px;
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
.checked{
    margin-top: 20px;
}

`


const signUpSchema = yup.object().shape({
    name: yup.string().trim().required("name is required"),
    email: yup.string().trim().required("email is required"),
    password: yup.string().trim().required("password is required"),
    confirmPassword: yup.string().trim().required("password is required"),
  
  
  });

const SignUp = () => {
    const [open,setOpen]=useState(false)
    const [checked,setChecked] = useState(false)
    const handleOpen = ()=>{
        setOpen(!open)
    }
    const handleClose =()=>{
        setOpen(false)
    }



    const { handleSubmit, control } = useForm({
        resolver: yupResolver(signUpSchema),
        defaultValues: {
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
    
    
        },
      });


      const dispatch = useAppDispatch();

    
    
      //sign up functionality---------------->
    
      const formSubmit = (data:ISignUp) => {
       
        dispatch(signup(data) as any)
          .unwrap() // Unwraps the action to get the actual result or error
          .then(() => {
            handleOpen()
          })
          .catch((err:any) => {
            console.log(err);
          });
      };

  return (
    <AuthWrap headingText="Welcome to WNO" subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
        <LoginWrap>
            <form       onSubmit={handleSubmit(formSubmit)}>
        <Grid container spacing={2.5}>
            <Grid item xs={12} md={6}>
            <Controller
              name="name"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { invalid, error },
              }) => (
                <InputFieldCommon
                  placeholder="Enter Name"
                  fullWidth
                  onChange={onChange}
                  value={value}
                  helperText={error?.message}
                  error={invalid}
                />
              )}
            />
        
            </Grid>
            <Grid item xs={12} md={6}>
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
      
            <Grid item xs={12} md={12}>
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
                   type="text"
                  onChange={onChange}
                  value={value}
                  helperText={error?.message}
                  error={invalid}
                />
              )}
            />
            </Grid>
            <Grid item xs={12} md={12}>
            <Controller
              name="confirmPassword"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { invalid, error },
              }) => (
                <InputFieldCommon
                  placeholder="Enter password"
                  fullWidth
                  type="text"
                  onChange={onChange}
                  value={value}
                  helperText={error?.message}
                  error={invalid}
                />
              )}
            />
            </Grid>
        </Grid>
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
              label="Accept terms & conditions and privacy policy"
            />
            <Stack direction="row" alignItems="center" justifyContent="center">
                <CustomButtonPrimary variant="contained" color="primary" className="button_primary"  type="submit"  disabled={!checked}  >
                Sign Up
                </CustomButtonPrimary>
            </Stack>
            <Typography variant="body1" className="sing_up">
            -If already have an account? <Link to="/auth/login">Log In</Link>
            </Typography>
            </form>
            </LoginWrap>
            <MuiModalWrapper onClose={handleClose} open={open} isClose>
                <LinkModalWrap>
                <i>
                    <img src={assest.mail_icon} alt="" />
                </i>
                <Typography variant="h3">
                We have sent a link to your email 
                </Typography>
                <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur. Congue sed sed eget id blandit pretium penatibus quam.
                </Typography>
                <CustomButtonPrimary variant="contained" color="primary" className="modla_button" href="/auth/otp-verification">
                Continue
                </CustomButtonPrimary>
                </LinkModalWrap>
            </MuiModalWrapper>
    </AuthWrap>
  
  )
}

export default SignUp