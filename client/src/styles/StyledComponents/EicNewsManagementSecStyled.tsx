import { Box, styled } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const EicNewsManagementSecStyled = styled(Box)`
  .headTxt {
    margin-bottom: 15px;
  }
  .headPara {
    margin-bottom: 15px;
  }
  .newsSec {
    margin-bottom: 30px;
    .name {
      margin-bottom: 20px;
    }
    .camImg {
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 30px;
      width: 100%;
      img {
        display: block;
        width: 100%;
        object-fit: cover;
      }
    }
    .muisc_box {
      display: flex;
      align-items: center;
      @media (max-width: 599px) {
        width: 100%;
      }
      @media (max-width:417px) {
           flex-wrap: wrap;
          }

      p {
        display: flex;
        align-items: center;
        font-size: 16px;
        line-height: 1;
        color: ${primaryColors.textPrimaryColor};
        font-family: "Noticia Text", serif;
        padding: 0 15px;
        @media (max-width: 479px) {
          font-size: 14px;
        }
        @media (max-width: 353px) {
          font-size: 10px;
        }

        svg {
          margin-right: 5px;
        }
        :not(:last-child) {
          border-right: 1px solid ${primaryColors.textPrimaryColor};
        }
        :first-child {
          padding-left: 0;
          @media (max-width:417px) {
            width: 100%;
            border: none;
          }
        }
        :nth-child(2){
          @media (max-width:417px) {
            padding-left: 0;
            margin-top: 10px;
          }
          
        }
        :last-child{
          @media (max-width:417px) {
            margin-top: 10px;
          }
        }
      }
    }
     .btn_stack{
        @media (max-width:599px) {
          margin-top: 15px;
        }
        p{
           padding: 0 15px;
            color: ${primaryColors.mainFontColor};
            text-transform: capitalize;
            line-height: 1;
            display: flex;
            align-items: center;
            font-size: 14px;
            svg{
                margin-right: 5px;
            }

            @media (max-width: 479px) {
            font-size: 14px;
          }
          @media (max-width: 353px) {
            font-size: 10px;
          }
           
            :last-child{
                padding-right: 0;
                border-left: 1px solid ${primaryColors.mainFontColor};
                border-radius: 0;
                color: ${primaryColors.color16C098};
                
            }
            :first-child{
              @media (max-width:599px) {
                padding-left: 0;
        }
              
            }
        }
      }
  }

  /* .pstDetails {
    display: flex;
    align-items: center;
    .date {
      display: flex;
      align-items: center;
      p {
        font-family: "Noticia";
        font-size: 16px;
        font-weight: 400;
        color: ${primaryColors.secondary};
      }
    }
    .txt {
      p {
        font-family: "Noticia";
        font-size: 16px;
        font-weight: 400;
        color: ${primaryColors.secondary};
      }
    }
    .music {
      display: flex;
      align-items: center;
      p {
        font-family: "Noticia";
        font-size: 16px;
        font-weight: 400;
        color: ${primaryColors.secondary};
      }
    }
  } */
  .video {
    figure {
      width: 100%;
      height: 533px;
      margin-top: 50px;
      border-radius: 0;
      .video_player {
        width: 100% !important;
        height: 100% !important;
      }
    }
  }
  .lftBtn {
    display: flex;
    align-items: center;
  }
  .btnStack {
    margin-top: 39px;
  }
  .cmnBtnStyle {
    height: 50px;
    width: 160px;
    padding: 10px;

    &.rejectBtn {
      background-color: ${primaryColors.colorE64D3E} !important;
      &:hover {
        background: ${primaryColors?.primary} !important;
        color: ${primaryColors?.white};
      }
    }
    &.approveBtn {
      margin-right: 16px;
    }
    &.editBtn {
      display: flex;
      align-items: center;
      border: 1px solid #2596be;
      border-radius: 6px;

      text-transform: none;
      p {
        font-size: 16px;
        font-weight: 400;
        color: ${primaryColors.primary};
        padding-left: 10px;
      }
    }
  }
  .newsDetilsImg{
    width: 100%;
    border-radius: 6px;
    overflow: hidden;
    line-height: 0;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
