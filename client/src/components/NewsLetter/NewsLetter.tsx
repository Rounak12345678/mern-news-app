
import styled from "@emotion/styled";
import { Checkbox, FormControlLabel } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import assest from "json/assest";
import { primaryColors } from "Theme/_muiPalette";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import CheckedIcon from "ui/Icons/CheckedIcon";
import UNcheckedIcon from "ui/Icons/UNcheckedIcon";
export const NewsLetterWrap = styled(Box)`
padding-bottom: 90px;
@media (max-width:899px) {
  padding-bottom: 65px;
}
@media (max-width:479px) {
  padding-bottom: 40px;
}
.wrap_news{
  padding: 40px;
  background: ${primaryColors.colorFAFAFA};
  border-radius: 20px;
  @media (max-width:599px) {
  padding: 30px;
}
@media (max-width:479px) {
         padding: 20px;
        }
  figure {
    width: 100%;
    height: 296px;
    line-height: 0;
    border-radius: 6px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .rgt_boxes {
    .update {
      font-size: 18px;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    h2 {
      font-size: 24px;
    }
    .input_stack {
      margin-top: 12px;

      .signup{
        @media (max-width:1199px) {
          margin-top: 15px;
        }
        @media (max-width:599px) {
          margin-top: 15px;
        }
        @media (max-width:479px) {
          width: 100%;
        }
      }
    }
    .email_log {
      min-width: 287px;
      margin-right: 10px;
      @media (max-width:1199px) {
         width: 100%;
        }
      @media (max-width:599px) {
  min-width: 100%;
  margin-right: 0;
}
      .MuiInputBase-root {
        height: 50px;
        background: #ffffff;
        border: 1px solid rgba(37, 150, 190, 0.2);
        border-radius: 6px;

        input {
          border: none;
          color: ${primaryColors.color565656};
          ::placeholder {
            opacity: 0.2;
          }
        }
        fieldset {
          display: none;
        }
      }
    }
  }
  .MuiFormControlLabel-root{
    align-items: start;
    margin-top: 20px;
    margin-right: 0;
    margin-left: 0;
    .MuiCheckbox-root{
      padding: 0;
    }
    .MuiTypography-root{
      font-size: 13px;
      color: ${primaryColors.color565656};
      margin-left: 12px;
      line-height: 1.4;
    }
  }
}
`;

const NewsLetter = () => {
  return (
    
    <NewsLetterWrap>
      <Container fixed>
        <Box className="wrap_news">
        <Grid container alignItems="center" spacing={{lg:7,md:7,sm:4,xs:2}}>
          <Grid item md={6} >
            <figure>
              <img alt="" src={assest.NewsLetter} width={508} height={296} />
            </figure>
          </Grid>
          <Grid item md={6}>
            <Box className="rgt_boxes">
              <Typography variant="body1" className="update">
                Get first update
              </Typography>
              <Typography variant="h2">
                Sign up for our daily newsletter
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                className="input_stack"
                flexWrap="wrap"
              >
                <TextField
                  placeholder="Enter your email"
                  className="email_log"
                />
                <CustomButtonPrimary variant="contained" color="primary" className="signup">
                  Sign up
                </CustomButtonPrimary>
              </Stack>
              <FormControlLabel
              control={
                <Checkbox
                  icon={<UNcheckedIcon />}
                  checkedIcon={<CheckedIcon />}
                  disableRipple
                />
              }
              label="Your newsletter subscriptions are subject to Ascend Privacy Policy and Terms and Conditions"
            />
            </Box>
          </Grid>
        </Grid>
        </Box>
        </Container>
    </NewsLetterWrap>
   
  );
};

export default NewsLetter;
