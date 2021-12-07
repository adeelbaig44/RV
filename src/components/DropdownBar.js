//Black bar on the main page
import { Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";

const DropdownBar = ({ name }) => {
  return (
    <>
      {/* condition for bar having different names and prices */}

      {/*  this condition will check if thir is name 
      or price in props and set it on the black bar */}
      <div className="bar">
        {name === "wheels" && (
          <>
            <div>
              <Typography className="drop-down-name">Wheels</Typography>
            </div>
            <div>
              <Typography className="drop-down-name">
                <KeyboardArrowDownIcon />
              </Typography>
            </div>
          </>
        )}
        {name === "toolbox" && (
          <>
            <div>
              <Typography className="drop-down-name">ToolBox</Typography>
            </div>
            <div>
              <Typography className="drop-down-name">
                <KeyboardArrowDownIcon />
              </Typography>
            </div>
          </>
        )}
        {name === "external_lights" && (
          <>
            <div>
              <Typography className="drop-down-name">
                External Lights
              </Typography>
            </div>
            <div>
              <Typography className="drop-down-name">
                $100.00
                <KeyboardArrowDownIcon />
              </Typography>
            </div>
          </>
        )}

        {name === "water_tank" && (
          <>
            <div>
              <Typography className="drop-down-name">Water Tank</Typography>
            </div>
            <div>
              <Typography className="drop-down-name">
                -$150.00
                <KeyboardArrowDownIcon />
              </Typography>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DropdownBar;
