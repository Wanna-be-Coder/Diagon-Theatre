import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

const useStyles = makeStyles((theme) => ({
  toggleContainer: {
    // margin: theme.spacing(2, 0),
    fontSize: "28px",
    marginBottom: "25px",
    marginLeft: "10px",
  },
}));

export default function ToggleButtonNotEmpty({
  alignment,
  handleAlignment,
  toggleName,
}) {
  const classes = useStyles();

  return (
    <div className={classes.toggleContainer}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label='text alignment'
      >
        <ToggleButton value='left' aria-label='left aligned'>
          {toggleName[0]}
        </ToggleButton>
        <ToggleButton value='center' aria-label='centered'>
          {toggleName[1]}
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
