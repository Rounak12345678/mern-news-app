import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

export const ActiveNewsTabStyled = styled(Box)`
    margin-top: 20px;
.activeNews{
    .MuiBox-root{
        .tag{
            background-color: ${primaryColors.colorD0F2EA};
        }
        .MuiTypography-h3{
            a{
                text-decoration: none;
            }
        }
    }
}
`