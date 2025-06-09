import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  pageAnimation,
  fade,
  LineAnim,
  slider,
} from "../assets/data/animation";

const Edits = () => {
  return (
    <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <Frame1 variants={slider}></Frame1>
      <Frame2 variants={slider}></Frame2>
      <Frame3 variants={slider}></Frame3>
      <Frame4 variants={slider}></Frame4>
      <Movie>
        <motion.h2 variants={fade}>
          🚧 This page is under design. Launching soon!{" "}
        </motion.h2>
        <motion.div variants={LineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            {/* <motion.img variants={photoAnim} src= {athlete} alt="athlete" /> */}
          </Hide>
        </Link>
      </Movie>
      {/* <Movie>
        <h2>The Racer</h2>
        <motion.div variants={LineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <Hide><img src= {theracer} alt="theracer" /></Hide>
        </Link>
      </Movie> */}
      {/* <Movie>
        <h2>Good Times</h2>
        <motion.div variants={LineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <img src= {goodtimes} alt="goodtimes" />
        </Link>
      </Movie> */}
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 5rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
    text-align: center;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #007a55;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  top: 20%;
  position: fixed;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #d2ffd9;
`;
export default Edits;
