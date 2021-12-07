//products components
import { Typography } from "@mui/material";
import React from "react";
import { Divider } from "@mui/material";
import SelectType from "./SelectType";
const Product = ({ name, img1, img2, img3 }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <div className="left_main_div">
        <Typography>
          <left_heading>Included</left_heading>
        </Typography>
        <div
          // condition for setting products according to the textfield condition
          style={{
            marginTop: name !== "toolbox" && name !== "water_tank" && "30px",
          }}
        >
          <Typography className="product_detail">
            <text>Name</text>
          </Typography>

          <div className="product">
            <img src={img1.default} />
            <input type="checkbox" classname="round" />
          </div>

          <Typography className="product_detail">
            <text>$100</text>
          </Typography>
        </div>
      </div>
      <Divider orientation="vertical" flexItem />
      <div className="right_main_div">
        <div className="right_main_top_div">
          <Typography>
            <right_heading>Options</right_heading>
          </Typography>
          {/* condition for passing props of selected types of size and brand */}
          {name !== "toolbox" && name !== "water_tank" && (
            <SelectType name={name} />
          )}
        </div>
        <div className="right_main_bottom_div">
          <div>
            <Typography className="product_detail">
              <text>Name</text>
            </Typography>
            <div className="product">
              <img src={img2.default} />
              <input type="checkbox" classname="round" />
            </div>
            <Typography className="product_detail">
              <text>$10</text>
            </Typography>
          </div>
          <div className="between_products">
            <Typography className="product_detail">
              <text>Name</text>
            </Typography>
            <div className="product">
              <img src={img3.default} />
              <input type="checkbox" classname="round" />
            </div>
            <Typography className="product_detail">
              <text>$100</text>
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
