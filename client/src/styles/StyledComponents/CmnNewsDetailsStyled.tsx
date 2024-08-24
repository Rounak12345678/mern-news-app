import { Box, styled } from "@mui/material";

export const CmnNewsDetailsStyled = styled(Box)`
    .newsDetails{
    }
    .newsPara{
        p{

            max-width: 571px;
        }
    }
    .newsDetilsImg{
        border-radius: 6px;
        overflow: hidden;
        line-height: 0;
        width: 100%;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

`