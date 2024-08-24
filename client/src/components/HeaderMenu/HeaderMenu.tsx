/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";


import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";

import { Container, ListItem, styled } from "@mui/material";
import BigMenu from "../BigMenu/BigMenu";
import DropDownIcon from "ui/Icons/DropdownIcon";

const HeaderMenuWrapper = styled(ListItem)``;

// type IMenuItemType = {
//   title: string;
// };

interface CustomMenuProps {
  buttonName: string;
}

const HeaderMenu: React.FC<CustomMenuProps> = ({ buttonName, ...props }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderMenuWrapper {...props}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<DropDownIcon />}
      >
        {buttonName}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
        slotProps={{
          paper: {
            className: "cmn_menu"
          }
        }}
      >
        <Container fixed>
          <BigMenu />
        </Container>
      </Menu>
    </HeaderMenuWrapper>
  );
};

export default HeaderMenu;
