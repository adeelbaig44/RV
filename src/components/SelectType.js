//component of textfield select type
import React from "react";
import TextField from "@mui/material/TextField";
const SelectType = ({ name }) => {
  return (
    <div className="textfield_div">
      {name === "wheels" ? (
        <>
          {/* dropdown of size */}
          <div className="left_textfield">
            <TextField
              fullWidth
              label="SIZE"
              name="option"
              select
              SelectProps={{ native: true }}
              variant="outlined"
            >
              <option value="v1">16"</option>
              <option value="v2">13"</option>
              <option value="v3">15"</option>
              <option value="v4">18"</option>
            </TextField>
          </div>
          {/* dropdown of Brand names  */}
          <div className="right_textfield">
            <TextField
              fullWidth
              label="Brand"
              name="option"
              select
              SelectProps={{ native: true }}
              variant="outlined"
            >
              <option value="v3">Dunlop</option>
              <option value="v1">Yokohama</option>
              <option value="v2">Michelin</option>
              <option value="v4">Honda</option>
            </TextField>
          </div>
        </>
      ) : (
        <div className="right_textfield">
          <TextField
            fullWidth
            label="SIZE"
            name="option"
            select
            SelectProps={{ native: true }}
            variant="outlined"
          >
            <option value="v1">MPC</option>
            <option value="v2">JPG</option>
            <option value="v3">RTS</option>
            <option value="v4">OPI</option>
          </TextField>
        </div>
      )}
    </div>
  );
};

export default SelectType;
