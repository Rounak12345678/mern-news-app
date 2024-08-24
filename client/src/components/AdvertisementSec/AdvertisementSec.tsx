import { Delete, Details } from "@mui/icons-material";
import { Grid, IconButton, Stack, styled } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Typography from "@mui/material/Typography";
import assest from "json/assest";
import { primaryColors } from "Theme/_muiPalette";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import DeleteSmall from "ui/Icons/DeleteSmall";
import DetailsSmall from "ui/Icons/DetailsSmall";

const AdvertisementSecWrap = styled(Box)`
  padding-top: 90px;
  @media (max-width: 1199px) {
    padding-top: 60px;
  }
  @media (max-width: 599px) {
    padding-top: 40px;
  }
  @media (max-width: 479px) {
    padding-top: 30px;
  }
  .heading {
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
  }
  .advert_inr {
    max-width: 970px;
    margin: 0 auto;
    background: #fafafa;
    border: 1px solid #d3eaf2;
    border-radius: 10px;
    margin-top: 15px;
    position: relative;

    .btnStack {
      position: absolute;
      right: 10px;
      top: 10px;
      button {
        padding: 0;
        :hover {
          background-color: transparent;
        }
      }
    }
    .left_box {
      padding: 20px 20px 40px 40px;
      @media (max-width: 1199px) {
        padding: 20px;
        padding-right: 0;
        
      }
      @media (max-width: 899px) {
        padding: 20px;
       padding-right: 20px;
        
      }
      h2 {
        font-size: 30px;
        margin-bottom: 13px;
        @media (max-width: 1199px) {
       font-size: 24px;
        
      }
      @media (max-width: 599px) {
        
        font-size: 20px;
      }
    
      }
      p {
        color: ${primaryColors.color565656};
      }
      button {
        margin-top: 18px;
        @media (max-width: 479px) {
       width: 100%;
        
      }
      }
    }
    .rgt_grid {
      position: relative;
      height: 100%;
      @media (max-width:899px){
        height: auto;
      }
      figure {
        height: 100%;
        line-height: 0;
        
        @media (max-width: 1199px) {
          
          height: auto;
        }
      
        .pic1 {
          height: 100%;
          object-fit: contain;
          width: 100%;

        }
      }
    }
  }
`;
interface addProp {
  img: any;
}
export default function AdvertisementSec({ img }: addProp) {
  return (
    <AdvertisementSecWrap>
      <Container fixed>
        <Typography variant="body1" className="heading">
          advertisement
        </Typography>
        <Box className="advert_inr">
          <Grid container alignItems="end">
            <Grid item md={6} xs={12}>
              <Box className="left_box">
                <Typography variant="h2">Lorem ipsum dolor sit amet</Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer efficitur tellus eget erat mollis, et dictum purus.
                </Typography>
                <CustomButtonPrimary
                  type="button"
                  variant="contained"
                  color="primary"
                >
                  Learn More
                </CustomButtonPrimary>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box className="rgt_grid">
                <figure>
                  <img
                    alt=""
                    src={img}
                    width={425}
                    height={285}
                    className="pic1"
                  />
                </figure>
              </Box>
            </Grid>
          </Grid>
          <Stack className="btnStack" direction="row" alignItems="center">
            <IconButton>
              <DetailsSmall />
            </IconButton>
            <IconButton>
              <DeleteSmall />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </AdvertisementSecWrap>
  );
}
