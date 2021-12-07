// Init
import React from "react";
//importing Cards from MUI
import { Typography } from "@mui/material";
import DropdownBar from "../components/DropdownBar";
import { Divider } from "@mui/material";
import Product from "../components/Product";

// Importing Components
import Header from "../components/Header";

//Images which are used in Products
const img1 = require("../assets/IMG/images/img1.png");
const img2 = require("../assets/IMG/images/img2.png");
const img3 = require("../assets/IMG/images/img3.png");
const img4 = require("../assets/IMG/images/img4.png");
const img5 = require("../assets/IMG/images/img5.png");
const img6 = require("../assets/IMG/images/img6.png");
const img7 = require("../assets/IMG/images/img7.png");
const img8 = require("../assets/IMG/images/img8.png");
const img9 = require("../assets/IMG/images/img9.png");
const img10 = require("../assets/IMG/images/img10.png");
const img11 = require("../assets/IMG/images/img11.png");
const img12 = require("../assets/IMG/images/img12.png");

// Home Component
export default function Home() {
  return (
    <div className="main_home_div">
      {/* Header of the main Page */}
      <Header />
      <div className="main_home_container">
        {/* Head container of main container in on main pages */}
        <div className="head">
          <Typography variant="h6" className="left">
            <heading>
              <svg
                width="32"
                height="22"
                viewBox="0 0 36 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.8877 6.60583C35.6361 6.01453 36 5.04486 36 3.64123C36 1.22623 34.918 0.00170899 32.7841 0.00170899H4.2318C1.8984 0.00163399 0 1.90018 0 4.23373V18.5385C0 20.872 1.8984 22.7706 4.2318 22.7706H4.61483C4.96673 24.6064 6.58388 25.9982 8.5209 25.9982C10.4576 25.9982 12.0745 24.6064 12.4263 22.7706H23.8145C24.1663 24.6064 25.7832 25.9982 27.7199 25.9982C29.6697 25.9982 31.2951 24.5878 31.6325 22.7341C32.8586 22.6153 33.7423 22.1974 34.3184 21.4639C35.005 20.5898 35.093 19.4413 35.093 18.5385C35.093 17.9962 34.9746 16.9555 34.1817 16.0801C33.7409 15.5936 33.1742 15.245 32.4887 15.0354L30.9632 7.26051H32.4301C33.1884 7.26058 34.1532 7.18611 34.8877 6.60583ZM8.52083 24.4983C7.15448 24.4983 6.0429 23.3869 6.0429 22.0207C6.0429 20.6543 7.15448 19.5427 8.52083 19.5427C9.8868 19.5427 10.9981 20.6543 10.9981 22.0207C10.9982 23.3868 9.8868 24.4983 8.52083 24.4983ZM20.6983 21.2706H14.8364V7.26058H20.6983V21.2706ZM27.7199 24.4983C26.3539 24.4983 25.2425 23.3869 25.2425 22.0207C25.2425 20.6543 26.3539 19.5427 27.7199 19.5427C29.0861 19.5427 30.1977 20.6543 30.1977 22.0207C30.1977 23.3868 29.0861 24.4983 27.7199 24.4983ZM33.5929 18.5386C33.5929 20.1313 33.2659 21.0346 31.6185 21.2299C31.2508 19.414 29.6425 18.0427 27.7198 18.0427C25.783 18.0427 24.1661 19.4346 23.8143 21.2706H22.1982V5.76058H13.3363V21.2707H12.4262C12.0744 19.4347 10.4576 18.0427 8.52083 18.0427C6.5838 18.0427 4.96665 19.4347 4.61475 21.2707H4.23173C2.7255 21.2706 1.5 20.045 1.5 18.5386V4.23381C1.5 2.72736 2.7255 1.50171 4.2318 1.50171H32.7841C34.2266 1.50171 34.5 2.25366 34.5 3.64123C34.5 4.54318 34.3176 5.14468 33.9578 5.42886C33.6675 5.65828 33.1963 5.76058 32.4299 5.76058H24.6269V16.2996H30.7567C33.3166 16.2995 33.5929 17.8654 33.5929 18.5386ZM30.9142 14.8024C30.8618 14.8013 30.81 14.7995 30.7568 14.7995H26.1269V7.26051H29.4344L30.9142 14.8024Z"
                  fill="#D94E3B"
                />
              </svg>
              Newage 22ft full Off Road
            </heading>
          </Typography>

          <Typography variant="h6" className="right">
            <headingRight>Choice your options and extras</headingRight>
          </Typography>
        </div>

        <Divider />

        <DropdownBar name="wheels" />
        <div className="product_list">
          <Product name="wheels" img1={img1} img2={img2} img3={img3} />
        </div>

        <DropdownBar name="toolbox" />
        <div className="product_list">
          <Product name="toolbox" img1={img4} img2={img5} img3={img6} />
        </div>

        <DropdownBar name="external_lights" />
        <div className="product_list">
          <Product name="external_lights" img1={img7} img2={img8} img3={img9} />
        </div>

        <DropdownBar name="water_tank" />
        <div className="product_list">
          <Product name="water_tank" img1={img10} img2={img11} img3={img12} />
        </div>
      </div>
    </div>
  );
}
