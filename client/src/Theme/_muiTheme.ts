import { PaletteMode } from "@mui/material";
import type { ThemeOptions } from "@mui/material/styles";
import { pallete, primaryColors } from "./_muiPalette";

/**
 * The function `MuiThemeOptions` returns a configuration object for the Material-UI theme based on the
 * provided mode (light or dark) and includes customizations for various components and typography.
 * @param {PaletteMode} mode - The `mode` parameter is of type `PaletteMode` and is used to determine
 * the color palette mode for the theme. The `PaletteMode` type can have two possible values: "light"
 * or "dark".
 * @returns The function `MuiThemeOptions` returns a `ThemeOptions` object.
 * 
 * 
 * 
 * 
 * 
 */
const customFonts = {
  primaryFont: 'Poppins, sans-serif',
  secondaryFont: 'Merriweather, serif',
  // Add more fonts as needed
};



export const MuiThemeOptions = (mode: PaletteMode): ThemeOptions => {
  return {
    palette: pallete(mode),
    typography: {
      fontFamily: customFonts.primaryFont,
      fontSize: 15,
      h1: {
        fontSize: "24px",
        lineHeight: "1.6em",
        fontWeight: "700",
        // fontFamily: `${merriweather?.style?.fontFamily}`,
        fontFamily: customFonts.secondaryFont,
        color:primaryColors.mainFontColor,
     
      },
      h2: {
        fontSize: "18px",
        lineHeight: "1.6em",
        fontWeight: "700",
        // fontFamily: `${merriweather?.style?.fontFamily}`,
        fontFamily: customFonts.secondaryFont,
        color:primaryColors.mainFontColor,

    
      },
      h3: {
        fontSize: "18px",
        lineHeight: "1.3em",
        fontWeight: "700",
        // fontFamily: `${merriweather?.style?.fontFamily}`,
        fontFamily: customFonts.secondaryFont,
        color:primaryColors.mainFontColor,

      },
      h4: {
        fontSize: "18px",
        lineHeight: "1.3",
        fontWeight: "500",
        // fontFamily: `${merriweather?.style?.fontFamily}`,
        fontFamily: customFonts.secondaryFont,
        color:primaryColors.mainFontColor,

     
      },
      h5: {
        fontSize: "15px",
        lineHeight: "1.4",
        fontWeight: "500",
        // fontFamily: `${merriweather?.style?.fontFamily}`,
        fontFamily: customFonts.secondaryFont,
        color:primaryColors.textPrimaryColor,

      },
      h6: {
        fontSize: "12px",
        lineHeight: "1.5",
        fontWeight: "500",
        // fontFamily: `${merriweather?.style?.fontFamily}`,
        color:primaryColors.textPrimaryColor,

        "@media(max-width:991px)": {
          fontSize: "12px",
          lineHeight: "1.5"
        }
      },
      body1: {
        fontSize: "15px",
        lineHeight: "1.7em",
        color: primaryColors.color565656 
      },
      body2: {
        fontSize: "12px",
        lineHeight: "1.5em",
        color: primaryColors.textPrimaryColor
      },
      caption: {
        fontSize: "14px",
        lineHeight: "1.5em",
        color: primaryColors.textPrimaryColor
      }
    },

    components: {
      MuiSkeleton: {
        defaultProps: {
          animation: "wave"
        }
      },
      MuiCard: {
        styleOverrides: {
          root: ({ ownerState, theme }) => {
            return {
              borderRadius: "8px",
              boxShadow: `0px 4px 24px 0px ${primaryColors.cardShadow}`
            };
          }
        }
      },
      MuiChip: {
        styleOverrides: {
          // eslint-disable-next-line consistent-return
          root: ({ ownerState, theme }) => {
            if (
              ownerState.variant === "filled" &&
              ownerState.color === "default"
            ) {
              return {
                backgroundColor: primaryColors?.bodyColor,
                color: primaryColors.mainFontColor,
                "&:hover": {
                  backgroundColor: primaryColors?.bodyColor,
                  color: primaryColors.mainFontColor
                }
              };
            }
            if (
              ownerState.variant === "filled" &&
              ownerState.color === "success"
            ) {
              return {
                backgroundColor: primaryColors?.lightGreen,
                color: primaryColors?.deepGreen,

                "&:hover": {
                  backgroundColor: primaryColors?.lightGreen,
                  color: primaryColors?.deepGreen
                }
              };
            }

            if (
              ownerState.variant === "filled" &&
              ownerState.color === "secondary"
            ) {
              return {
                backgroundColor: primaryColors?.secondary,
                color: primaryColors?.white,
                border: `1px solid ${primaryColors?.secondaryBorder}`,
                "&:hover": {
                  background: primaryColors?.secondaryBorder,
                  color: primaryColors?.white
                }
              };
            }

            if (
              ownerState.variant === "filled" &&
              ownerState.color === "error"
            ) {
              return {
                backgroundColor: primaryColors?.chipErrorBg,
                color: primaryColors?.chipErrorText,
                "&:hover": {
                  backgroundColor: primaryColors?.chipErrorBg,
                  color: primaryColors?.chipErrorText
                }
              };
            }

            if (
              ownerState.variant === "filled" &&
              ownerState.color === "warning"
            ) {
              return {
                backgroundColor: primaryColors?.warning_color,
                color: primaryColors?.warning_text,
                "&:hover": {
                  backgroundColor: primaryColors?.warning_color,
                  color: primaryColors?.warning_text
                }
              };
            }

            if (
              ownerState.variant === "outlined" &&
              ownerState.color === "info"
            ) {
              return {
                backgroundColor: primaryColors?.white,
                color: primaryColors?.white,
                border: `1px solid ${primaryColors?.disabledBg}`,

                "&:hover": {
                  background: primaryColors?.disabledBg,
                  borderColor: primaryColors?.disabledBg,

                  color: primaryColors?.white
                }
              };
            }
          }
        }
      },
      MuiMenuItem: {
        styleOverrides: {
          root: () => {
            return {
              "@media(max-width:991px)": {
                minHeight: "20px"
              }
            };
          }
        }
      },
      MuiMenu: {
        defaultProps: {
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "right"
          },
          PaperProps: {
            elevation: 0
          }
        },
        styleOverrides: {
          paper: ({ theme }) => {
            return {
              overflow: "visible !important",
              filter: "drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.32))",
              marginTop: "6px",

              "@media(max-width:991px)": {
                marginTop: "0"
              }
            };
          },
          list: () => {
            return {
              paddingTop: "4px",
              paddingBottom: "4px"
            };
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          // eslint-disable-next-line consistent-return
          root: ({ ownerState }) => {
            if (
              ownerState.variant === "contained" &&
              ownerState.color === "primary"
            ) {
              return {
                // backgroundColor: primaryColors?.primary,
                background: `${primaryColors?.primary} !important`,
                color: `${primaryColors?.white}`,
                borderRadius: "6px",

                "&:hover": {
                  background: `${primaryColors?.primary1} !important`,
                  color: primaryColors?.white
                }
              };
            }
            if (
              ownerState.variant === "contained" &&
              ownerState.color === "success"
            ) {
              return {
                backgroundColor: primaryColors?.info,
                color: primaryColors?.white,
                border: `1px solid ${primaryColors?.infoBorder}`,
                "&:hover": {
                  background: primaryColors?.infoBorder,
                  color: primaryColors?.white
                }
              };
            }

            if (
              ownerState.variant === "contained" &&
              ownerState.color === "secondary"
            ) {
              return {
                backgroundColor: primaryColors?.secondary,
                color: primaryColors?.white,
                border: `1px solid ${primaryColors?.secondaryBorder}`,
                "&:hover": {
                  background: primaryColors?.secondaryBorder,
                  color: primaryColors?.white
                }
              };
            }

            if (
              ownerState.variant === "contained" &&
              ownerState.color === "error"
            ) {
              return {
                backgroundColor: primaryColors?.errorMain,
                color: primaryColors?.white,
                border: `1px solid ${primaryColors?.errorMain}`,
                "&:hover": {
                  background: primaryColors?.errorMain,
                  color: primaryColors?.white
                }
              };
            }
            if (
              ownerState.variant === "outlined" &&
              ownerState.color === "info"
            ) {
              return {
                backgroundColor: primaryColors?.white,
                color: primaryColors?.white,
                border: `1px solid ${primaryColors?.disabledBg}`,

                "&:hover": {
                  background: primaryColors?.primary ,
                  borderColor: primaryColors?.primary,

                  color: primaryColors?.white
                }
              };
            }

            if (
              ownerState.variant === "outlined" &&
              ownerState.color === "inherit"
            ) {
              return {
                backgroundColor: primaryColors?.white,
                color: primaryColors?.primary,
                border: `1px solid ${primaryColors?.primary}`,

                "&:hover": {
                  background: primaryColors?.primary,
                  border: `1px solid ${primaryColors?.primary}`,
                  color: primaryColors?.white
                }
              };
            }
          }
        },
        defaultProps: {
          disableElevation: true
        }
      },

      MuiBackdrop: {
        styleOverrides: {
          root: {
            // backdropFilter: "blur(4px)"
          }
        }
      },
      MuiTabs: {
        styleOverrides: {
          indicator: ({ theme }) => ({
            backgroundColor: theme?.palette?.primary.main
          })
        }
      }
    }
  };
};