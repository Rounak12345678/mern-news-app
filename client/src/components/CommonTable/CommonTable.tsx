import {
  Box,
  Button,
  Menu,
  MenuItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";
import CustomSelect from "components/CustomSelect/CustomSelect";
import { tableData } from "json/mock/demo.mock";
import React from "react";
import THreeDots from "ui/Icons/THreeDots";
import SmallDropIcon from "ui/Icons/smallDropIcon";
export const CommonTableWrap = styled(Box)`
  .listTop {
    display: flex;
    align-items: center;

    .select {
      .sortBy {
        font-size: 14px;
        font-weight: 500;
        color: ${primaryColors.secondary};
        min-width: 60px;
      }
    }
    .cusTomselect {
      min-width: 155px;
      padding: 9px 12px;
      min-height: 40px;
      background: rgb(242, 242, 242);
      border: 1px solid rgb(255, 255, 255);
      border-radius: 5px;
      .MuiSelect-select {
        padding-right: 10px;
      }
    }
  }
  table {
    margin-top: 22px;
    thead {
      tr {
        background-color: #effbff;
        th {
          border-bottom: none;
          color: ${primaryColors.mainFontColor};
          font-size: 15px;
          font-weight: 400;
        }
      }
    }
    tbody {
      tr {
        td {
          border-bottom: 1px solid rgb(196, 196, 196, 0.2);
          padding: 20px;
          figure {
            width: 57px;
            height: 45px;
            border-radius: 4px;
            line-height: 0;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          &.news_sale {
            max-width: 212px;
          }
          .pen {
            padding: 4px 10px;
            background-color: rgb(223, 181, 74, 0.2);
            color: ${primaryColors.colorDFB54A};
            max-width: 99px;
            text-align: center;
            border-radius: 6px;
          }
          .app {
            padding: 4px 10px;
            background-color: rgb(22, 192, 152, 0.2);
            color: ${primaryColors.color16C098};
            max-width: 99px;
            text-align: center;
            border-radius: 6px;
          }
          .rej {
            padding: 4px 10px;
            background-color: rgb(214, 97, 76, 0.2);
            color: ${primaryColors.colorD6614C};
            max-width: 99px;
            text-align: center;
            border-radius: 6px;
          }
        }
      }
    }
  }
`;
const CommonTable = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <CommonTableWrap>
      <Stack
        className="listTop"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h1">News List</Typography>
        <Stack className="select" direction="row" alignItems="center">
          <Typography variant="body1" className="sortBy">
            Sort by:
          </Typography>
          <CustomSelect
            initialValue="Latest Request"
            isLabel
            icon={<SmallDropIcon />}
            className="cusTomselect"
          >
            <MenuItem value="New">Newest Request</MenuItem>
            <MenuItem value="Old">Oldest Request</MenuItem>
          </CustomSelect>
        </Stack>
      </Stack>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>News Post Title</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Repeater Name </TableCell>
              <TableCell>Status </TableCell>
              <TableCell>Action </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((data, index) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                key={index}
              >
                <TableCell>
                  <figure>
                    <img src={data.img} alt="" />
                  </figure>
                </TableCell>
                <TableCell className="news_sale">
                  {" "}
                  <Typography variant="body1">{data.news}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{data.date}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{data.time}</Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography variant="body1">{data.reportName}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1" className={data.className}>
                    {data.chip}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <THreeDots />
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    slotProps={{
                        paper:{
                            className:"table_menu"
                        }
                    }}
                  >
                    <MenuItem onClick={handleClose}>View</MenuItem>
                    <MenuItem onClick={handleClose}>Accept</MenuItem>
                    <MenuItem onClick={handleClose}>Reject</MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CommonTableWrap>
  );
};

export default CommonTable;
