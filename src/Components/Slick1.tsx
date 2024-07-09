/** @format */

import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Silder from "react-slick";
import img from "./Assets/logo-casper-1-1.png";
import img1 from "./Assets/logo-cloudflare-1.png";
import img2 from "./Assets/logo-jamf-1.png";
import img3 from "./Assets/logo-mastercard.png";
import img4 from "./Assets/logo-mindshare-1.png";
import img5 from "./Assets/logo-pluralsight-1.png";
import img6 from "./Assets/logo-viacomcbs.png";
import img7 from "./Assets/logo-github-1.png";

const Slick = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
    cssEase: "linear",
  };
  return (
    <Main>
      <Silder {...settings}>
        <Box>
          <img src={img} alt="" />
        </Box>
        <Box>
          <img src={img1} alt="" />
        </Box>
        <Box>
          <img src={img2} alt="" />
        </Box>
        <Box>
          <img src={img3} alt="" />
        </Box>
        <Box>
          <img src={img4} alt="" />
        </Box>
        <Box>
          <img src={img5} alt="" />
        </Box>
        <Box>
          <img src={img6} alt="" />
        </Box>
        <Box>
          <img src={img7} alt="" />
        </Box>
      </Silder>
    </Main>
  );
};

export default Slick;

const Box = styled.div`
  img {
    height: 80px;
    object-fit: contain;
  }
`;
const Main = styled.div`
  width: 100%;
  height: 180px;
  margin-top: 20px;
  align-items: center;
`;
