import { Box, styled } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const CustomDrawer = styled(Box,{
  shouldForwardProp: (data) => data !== "listHeight",
})<{
  listHeight: number | undefined;
  logoutSecHeight: number | undefined;
}>`
  width: 265px;
  position: fixed;
  left: 0px;
  top: 0px;
  height: 100%;
  overflow-y: auto;
  z-index: 5;
  background-color: ${primaryColors?.primary};
  
  .logo_sec {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 20px 45px;
    border-bottom: 1px solid ${primaryColors.color55B1D2};
    a {
      display: inline-block;
    }
  }
  .sidebar_menu {
    padding: 0 15px;
    margin-top: 25px;
    height: calc(
      100vh -
        (
          ${({ listHeight }) => `${listHeight}px`} + 100px +
            (${({ logoutSecHeight }) => `${logoutSecHeight}px`})
        )
    );
    overflow-y: auto;
    margin-bottom: ${({ logoutSecHeight }) => `${logoutSecHeight}px`};
    li {
      :not(:last-child){
        margin-bottom:10px;
      }
      a {
        font-family: "Noticia";
        font-weight: 400;
        font-size: 16px;
        text-transform: none;
        line-height: 1.5;
        color: ${primaryColors?.white};
        width: 100%;
        justify-content: flex-start;
        padding: 15px 20px;
        background: ${primaryColors?.primary};
        border-radius: 10px;
        padding-left:32px;

        .MuiButton-startIcon {
          margin-left: 0px;
          margin-right: 12px;
        }
        &:hover {
          background: ${primaryColors.white};
          color: ${primaryColors.primary};
          svg {
            filter: brightness(0) saturate(100%) invert(48%) sepia(20%) saturate(1655%) hue-rotate(150deg) brightness(102%) contrast(85%);
          }
        }
        &.active{
      background: ${primaryColors.white};
      color: ${primaryColors.primary};
      svg {
            filter: brightness(0) saturate(100%) invert(48%) sepia(20%) saturate(1655%) hue-rotate(150deg) brightness(102%) contrast(85%);
          }
    }
      }
  
    }
  }
  .logout_block {
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: ${primaryColors?.primary};
    width: 100%;
    padding: 20px 20px 40px 20px;
    z-index: 3;
    border-top: 1px solid ${primaryColors.color55B1D2};

    button {
      font-family: "Roboto";
      font-weight: 500;
      font-size: 14px;
      line-height: 1.5;
      color: ${primaryColors?.white};
      width: 100%;
      justify-content: flex-start;
      padding: 19.5px 20px;
      background: ${primaryColors?.primary};
      border-radius: 10px;
      svg {
        fill: ${primaryColors.primary};
      }
      .MuiButton-startIcon {
        margin-left: 0px;
        margin-right: 12px;
      }
      &:hover {
        background: ${primaryColors.white};
        color: ${primaryColors.primary};
        svg {
            path {
              stroke: ${primaryColors.primary};
            }
          }
      }
    }
  }
  `;

  
