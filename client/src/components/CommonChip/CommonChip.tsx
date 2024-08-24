
import { Box, Chip, styled } from "@mui/material";

export const CommonChipWrap = styled(Box)`
.MuiChip-root{
    border-radius: 4px;
    min-width: 109px;
    .MuiChip-label{
        font-size: 14px;
        padding: 0;
        text-transform: uppercase;
    }
}
`;
interface chipProps {
  title: string;
}
const CommonChip = ({ title }: chipProps) => {
  return (
    <CommonChipWrap>
      <Chip label={title} />
    </CommonChipWrap>
  );
};

export default CommonChip;
