import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { primaryColors } from "Theme/_muiPalette";

export const HeaderWrap = styled(Box)`
  background: ${primaryColors.white};
  box-shadow: 0px 8px 50px rgba(45, 45, 45, 0.04);
  .MuiToolbar-root {
    min-height: auto;
    padding: 0;
    position: relative;
  }
  .hdr_rgt {
    margin-left: auto;
    display: flex;
    align-items: center;
    .header_search {
      min-width: 250px;
      margin-right: 10px;
      @media (max-width: 1199px) {
        display: none;
      }
      .MuiInputBase-root {
        input {
          border: none;
          color: ${primaryColors.color565656};
          font-size: 13px;
          opacity: 1;
          padding-right: 20px;
          ::placeholder {
            opacity: 1;
          }
        }
        fieldset {
          display: none;
        }
      }
      .MuiButtonBase-root {
        padding: 0;
        :hover {
          background-color: transparent;
        }
      }
    }
    ul {
      display: flex;
      align-items: center;
      li {
        button {
          width: 40px;
          height: 40px;
          border-radius: 6px;
          @media (max-width: 899px) {
            width: 30px;
            height: 30px;
          }
          background-color: ${primaryColors.colorEAF5F9};
          :hover {
            background-color: ${primaryColors.primary};
            svg {
              filter: brightness(0) saturate(100%) invert(100%) sepia(100%)
                saturate(2%) hue-rotate(165deg) brightness(109%) contrast(101%);
            }
          }
        }
        :not(:last-child) {
          margin-right: 7px;
        }
      }
    }
  }

  .headerContainer {
    background-color: transparent !important;
    padding: 30px 0;
    transition: all 0.4s;
    @media (max-width:399px) {
      padding: 20px 0;
    }
  }

  .headerLogo {
    width: 170px;
    display: inline-block;
    transition: all 0.4s;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 599px) {
      width: 120px;
    }
    @media (max-width: 479px) {
      left: 120px;
      top: 50%;
    }
    @media (max-width: 479px) {
      width: 80px;
    }
  }
  .navbar {
    ul {
      display: flex;
      align-items: center;
      li {
        width: fit-content;
        margin-right: 30px;
        button {
          padding: 0;
          min-width: fit-content;
          line-height: 1.2;
          text-transform: capitalize;
          font-weight: 400;
          color: ${primaryColors.textPrimaryColor};
          display: flex;
          align-items: center;
          font-size: 15px;
          .MuiButton-endIcon {
            line-height: 0;
          }
          .MuiButton-icon {
            line-height: 0;
            margin-left: 5px;
            svg {
            }
          }
          :hover {
            background-color: transparent;
            color: ${primaryColors.primary};
            .MuiButton-endIcon {
              svg {
                filter: brightness(0) saturate(100%) invert(46%) sepia(86%)
                  saturate(417%) hue-rotate(150deg) brightness(92%)
                  contrast(91%);
              }
            }
          }
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
    a {
      display: inline-block;
      color: ${primaryColors.textPrimaryColor};
      font-size: 15px;
      &:hover {
        color: ${primaryColors.primary};
      }

      &:first-child {
        margin-left: 0;
      }
      &.active {
        color: ${primaryColors.primary};
      }
    }
  }
  .drawer_butt {
    svg {
      filter: brightness(0) saturate(100%) invert(48%) sepia(14%)
        saturate(4455%) hue-rotate(159deg) brightness(97%) contrast(71%);
    }
  }
`;
    
export const CustomDrawer = styled(Box)`
background-color: ${primaryColors.primary};
height: 100%;
padding: 20px;
overflow-y: auto;
  .inner_wrap{
    ul{
      margin-top: 20px;
      li{
        a{
          text-decoration: none;
          color: ${primaryColors.white};
          width: 100%;
          padding: 10px ;
          border-radius: 6px;
          &.active{
            background-color: ${primaryColors.white};
            color: ${primaryColors.primary};
          }
         :hover{
          background-color: ${primaryColors.white};
          color: ${primaryColors.primary};
         }
        }
        :not(:last-child){
          margin-bottom: 15px;
        }
        .drawr_butt{
          .MuiListItemText-root{
            .MuiTypography-root {
              text-decoration: none;
              color: ${primaryColors.white};
            }
          }
        }
      }
    }
    .MuiDivider-root{
      background-color: ${primaryColors.white};
    }
    .header_search{
      width: 100%;
      
      .MuiInputBase-root{
        background-color: ${primaryColors.white};
       padding-right: 5px;
        input{
          color: ${primaryColors.mainFontColor};
          padding: 11px 10px 11px;
          ::placeholder{
            color: ${primaryColors.mainFontColor};
            opacity: 1;
          }
        }
        fieldset{
          display: none;
        }
      }
    }
  }
  .header_accordian{
    background-color: transparent;
    box-shadow: none;
    margin-bottom: 15px;
    .MuiAccordionSummary-root{
      padding: 0;
      padding-left: 10px;
      min-height: 45.5px;
      .MuiAccordionSummary-content{
        margin: 0;
        color: ${primaryColors.white};
      }
      svg{
        filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(6398%) hue-rotate(156deg) brightness(117%) contrast(100%);
      }
    }
    .rgt_grid{
      margin-top: 15px;
      figure{
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
      .rgt_cont{
        *{
          color: ${primaryColors.white};
          
        }
        h2{
          margin-bottom: 10px;
          font-size: 16px;
        }
        p{
          font-size: 12px;
        }
      }
    }
    .lft_grd{
      ul{
        padding: 0;
        li{
          a{
            padding: 0;
            color: ${primaryColors.white};
            :hover{
              background-color: transparent;
            }
          }
        }
      }
    }
  }

`
