import { Box, Tab, Tabs } from "@mui/material";
import ActiveNewsTab from "components/ActiveNewsTab/ActiveNewsTab";
import PastNewsTab from "components/PastNewsTab/PastNewsTab";
import RejectedNewsTab from "components/RejectedNewsTab/RejectedNewsTab";
import React from "react";
import { CommonTabsStyled } from "styles/StyledComponents/CommonTabsStyled";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box >{children}</Box>}
    </div>
  );
}

const CommonTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  return (
    <CommonTabsStyled >
      <Box sx={{ width: "100%" }}>
        <Box >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            className="tabSec"
          >
            <Tab label="Active News" disableRipple />
            <Tab label="Past News" disableRipple />
            <Tab label="Rejected News" disableRipple />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <ActiveNewsTab/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <PastNewsTab/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <RejectedNewsTab/>
        </CustomTabPanel>
      </Box>
    </CommonTabsStyled>
  );
};

export default CommonTabs;
