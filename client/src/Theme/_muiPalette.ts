/* eslint-disable no-dupe-keys */
//  MUI pallete colors will be listed here

import { colors, PaletteMode, PaletteOptions } from "@mui/material";

export const primaryColors = {
  primary: "#2596BE",
  primary1: "#5CB0CE",

  primary_600: "#5871D0",
  secondary: "#2D2D2D",
  secondaryBorder: "#F380A5",
  info: "#7CD1D2",
  infoBorder: "#67C1C2",
  disabledBg: "#DBE0E8",
  textDisabled: "#8F98A8",
  errorMain: "#EB4444",
  errorLight: "#FFECF2",
  white: "#fff",
  black: "#000",
  bodyColor: "#F4F6F8",
  mainFontColor: "#2D2D2D",
  textPrimaryColor: "#070707",
  textTeriaryColor: "#565656",
  borderprimary: "#DBE0E8",

  border_primary: "#DBE0E8",
  warning_color: "#FFEFD7",
  success_color: "#D4FEFF",
  text_success: "#3C8183",
  warning_text: "#6F4F1F",
  deepGreen: "#3c8183",
  lightGreen: "#D4FEFF",
  danger_text: "#9B3858",
  warningMain: "rgba(255, 167, 33, 1)",
  pendingColor: "#FFEFD7",
  pendingTextColor: "#6F4F1F",
  textDanger: "#9B3858",
  dangerColor: "#FFECF2",

  // borderprimary:"#DBE0E8",
  chipErrorBg: "#FFECF2",
  chipErrorText: "#9B3858",
  cardShadow: "#0707070F",
  tableshadow: "rgba(7, 7, 7, 0.06)",
  secondaryFont: "#4D4E4E",
  tertiaryFont: "#585858",
  color060606: "#060606",
  colorF6EFF8: "#F6EFF8",
  colorfdf8ff: "#fdf8ff",
  color2F3240: "#2F3240",
  colorC4C4C4:"rgba(196, 196, 196,.2)",
  colorEFF8FB:"#EFF8FB",
  color565656:"#565656",
  colorEAF5F9:"#EAF5F9",
  colorF3F3F3:"#F3F3F3",
  colorE0F0F5:"#E0F0F5",
  colorFAFAFA:"#FAFAFA",
  colorD0F2EA : "#D0F2EA",
  colorD6614C : "#D6614C",
  colorDADADA : "#DADADA",
  color55B1D2 : "#55B1D2",
  colorF6FDFF : "#F6FDFF",
  colorE64D3E : "#E64D3E",
  colorDFB54A: "#DFB54A",
  colorF2F2F2 : "#F2F2F2",
  color16C098:"#16C098",

};

export const pallete = (mode: PaletteMode): PaletteOptions => {
  return {
    mode,
    background: {
      default: mode === "light" ? "#f5f8fa" : "#000",
      paper: mode === "light" ? "#fff" : "#000",
    },
    //global
    primary: {
      main: primaryColors.primary,
      dark: primaryColors.primary_600,
    },
    secondary: {
      main: primaryColors.secondary,
    },
    info: {
      main: primaryColors.info,
    },
    error: {
      main: primaryColors.errorMain,
    },
    warning: {
      main: primaryColors.warningMain,
    },

    text: {
      primary: primaryColors.disabledBg,
    },
    common: {
      black: "#000",
      white: "#fff",
    },
  };
};
