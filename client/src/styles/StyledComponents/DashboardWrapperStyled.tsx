import { Stack, styled } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const DashboardWrapperStyled = styled(Stack, {
  shouldForwardProp: (data) => data !== "headerHeight",
})<{ headerHeight: number }>`
  padding: 0px 20px;
  height: 100vh;
  background-color: ${primaryColors.colorF6FDFF};
  .wrapper_rgt {
    width: calc(100% - 253px);
    flex-basis: calc(100% - 253px);
    padding-left: 30px;
    padding-top: ${({ headerHeight }) => `${headerHeight}px`};
    margin-left: auto;
    @media (max-width: 1199px) {
      width: 100%;
      flex-basis: 100%;
      padding-left: 0px;
    }
  }
  .dashboard_body {
    //background: ${primaryColors?.primary};
    border-radius: 6px;
    height: calc(100vh - (40px + ${({ headerHeight }) => `${headerHeight}px`}));
    overflow-y: auto;
    /* background-color: ${primaryColors.white}; */
  }
  .common_box {
    padding: 16px 20px;
    border-radius: 10px;
    background-color: ${primaryColors?.white};
  }
  .dwaer_butt {
    display: none;
    padding: 0px;
    min-width: fit-content;
    line-height: 0;
    margin: 10px 0 15px;
    filter: brightness(0) saturate(100%) invert(48%) sepia(66%) saturate(843%)
      hue-rotate(155deg) brightness(91%) contrast(73%);
    @media (max-width: 1199px) {
      display: block;
    }
  }
`;
