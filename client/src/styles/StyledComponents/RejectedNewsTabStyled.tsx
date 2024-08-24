import { Box, styled } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const RejectedNewsTabStyled = styled(Box)`
    margin-top: 20px;
    .rejectedNews{
    .MuiBox-root{
        .tag{
            background-color: rgba(214, 97, 76, 0.3);
        }
        .MuiTypography-h3{
            a{
                text-decoration: none;
            }
        }
    }
}
`