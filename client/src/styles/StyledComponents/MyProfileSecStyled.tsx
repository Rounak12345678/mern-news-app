import { Box, styled } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const MyProfileSecStyled = styled(Box)`
max-height: 100vh;

  .myprofileTop {
    /* padding: 44px; */
    display: flex;
    border-radius: 6px;
    margin-bottom: 30px;
    @media (max-width: 899px) {
      flex-wrap: wrap;
    }
    .topLft {
      padding-right: 42px;
      border-right: 1px solid rgb(196, 196, 196,0.2);
      text-align: center;
      h2 {
        padding: 10px 0;
      }
    @media (max-width: 599px) {
      width: 100%;
      padding-right: 0;
      border-right: none;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 20px;
    }
    }
    .topRgt {
      padding-left: 41px;
      width: calc(100% - 230px);
       @media (max-width: 599px) {
      width: 100%;
      padding-left: 0;
      
    }
      .edit_butt{
        padding: 0;
        min-width: fit-content;
        :hover{
          background-color: transparent;
        }
      }
      .myInfo {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 33px;
        border-bottom: 1px solid rgb(196, 196, 196,0.2);
        h1{
          @media (max-width:479px) {
            font-size: 20px;
          }
        }
        .editIcon {
          background-color: rgba(239, 248, 251, 1);
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .fullInfo {
        display: flex;
        align-items: center;
        padding-top: 25px;
        .iconPart {
          width: 41px;
          height: 41px;
          background-color: ${primaryColors.primary};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .txtPart {
          padding-left: 15px;
          h5 {
            color: ${primaryColors.textTeriaryColor};
            font-size: 14px;
            font-weight: 400;
            padding-bottom: 2px;
          }
        }
      }
    }
  }

  .myprofileBtm {
    padding: 39px 25px;
    overflow-y: auto;
    .headTxt {
      border-bottom: 1px solid rgb(196, 196, 196,0.2);
      padding-bottom: 20px;
      margin-bottom: 30px;
    }
    .card {

    }
  }
`;
