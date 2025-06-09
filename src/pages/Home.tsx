import "../styles/home.scss";
import Grid from "@mui/material/Grid2";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/effect-cards";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/scrollbar";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Wave from "../components/Wave";
import { motion } from "motion/react";

const Home = () => {
  const location = useLocation();
  // framer motion elements
  const MotionButton = motion(Button);
  const MotionGrid = motion(Grid);

  useEffect(() => {
    const processInstagramEmbeds = () => {
      if (window.instgrm) {
        window.instgrm?.Embeds?.process();
      }
    };

    const timeout = setTimeout(() => {
      processInstagramEmbeds();
    }, 100);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  const onClickRedirect = () => {
    window.location.href = "https://www.instagram.com/kiran_explains/";
  };
  return (
    <>
      <Grid container spacing={1}>
        <Grid size={{ xs: 12, md: 6 }} className="home-intro">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Hi, I'm <span>Yuva Sai Kiran</span>
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            I make tech videos on Instagram, create tech courses on YouTube, and
            do video editing. I secured <span>AIR 5335</span> in GATE Computer
            Science 2025.
          </motion.h3>
        </Grid>
        <MotionGrid
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          size={{ xs: 12, md: 6 }}
          className="home-intro-carosal"
        >
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            className="mySwiper"
            autoplay={{
              delay: 1200,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/DIp3_78AOoD/"
                data-instgrm-version="16"
                style={{ maxWidth: "350px", width: "100%" }}
              ></blockquote>
            </SwiperSlide>
            <SwiperSlide>
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/DIUA9oexAg-/"
                data-instgrm-version="16"
                style={{ maxWidth: "350px", width: "100%" }}
              ></blockquote>
            </SwiperSlide>
            <SwiperSlide>
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/DIOBiDZpnP_/"
                data-instgrm-version="16"
                style={{ maxWidth: "350px", width: "100%" }}
              ></blockquote>
            </SwiperSlide>
          </Swiper>
        </MotionGrid>
        <Grid size={{ xs: 12, md: 6 }} className="home-intro-mobile">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Hi, I'm <span>Yuva Sai Kiran</span>
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            I make tech videos on Instagram, create tech courses on YouTube, and
            do video editing. I secured <span>AIR 5335</span> in GATE Computer
            Science 2025.
          </motion.h3>
        </Grid>
        <Wave />
      </Grid>
      <Grid container spacing={0} className="about-main-con">
        <Grid size={{ xs: 12, md: 12 }} className="about-sub-con">
          <h1>Looking to master tech skills?</h1>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }} className="about-sub-con-btn">
          <MotionButton
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={onClickRedirect}
            size="large"
            className="follow-btn"
          >
            Follow Me
          </MotionButton>
        </Grid>
      </Grid>
      {/* services section */}

      <Grid container spacing={0} className="about-main-con">
        <Grid size={{ xs: 12, md: 12 }} className="about-sub-con">
          <h1>Our Services</h1>
        </Grid>
      </Grid>
      <Services />

      {/* Skills section */}

      <Grid container spacing={0} className="about-main-con">
        <Grid size={{ xs: 12, md: 12 }} className="about-sub-con">
          <h1>Skills</h1>
        </Grid>
      </Grid>
      <Skills />
    </>
  );
};

export default Home;
