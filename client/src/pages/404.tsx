import { Button } from "@mui/material";
import Wrapper from "Layout/Wrapper/Wrapper";
import React from "react";

const NotFound = () => {
  return (
    <Wrapper>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="error">
      error
      </Button>
      <Button variant="contained" color="secondary">
      secondary
      </Button>
      <Button variant="contained" color="success">
      success
      </Button>
      <Button variant="contained" color="warning">
      warning
      </Button>

      <div>NotFound</div>
    </Wrapper>
  );
};

export default NotFound;
