import Grid from "@mui/material/Grid2";
import "../styles/home.scss";
import WebIcon from "@mui/icons-material/Web";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import MovieCreationIcon from "@mui/icons-material/MovieCreation"; // Add this icon
import { motion } from "motion/react";

const Services = () => {
  return (
    <Grid container spacing={2} className="services-cards-con">
      <Grid
        size={{ xs: 12, md: 4 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.5 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          viewport={{ once: true }}
          className="service-card"
        >
          <WebIcon className="service-icon" />
          <h2>Website Development</h2>
          <p>
            I develop modern, responsive websites using MERN stack, Spring Boot,
            and Django.
          </p>
        </motion.div>
      </Grid>
      <Grid
        size={{ xs: 12, md: 4 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.5 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          viewport={{ once: true }}
          className="service-card"
        >
          <VideoLibraryIcon className="service-icon" />
          <h2>Video Editing</h2>
          <p>
            I create and edit engaging, high-quality tech videos with motion
            graphics, subtitles, and storytelling for social media.
          </p>
        </motion.div>
      </Grid>
      <Grid
        size={{ xs: 12, md: 4 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.5 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          viewport={{ once: true }}
          className="service-card"
        >
          <MovieCreationIcon className="service-icon" />
          <h2>Video Creation</h2>
          <p>
            I create complete video content from script to final edit, ideal for
            educational, promotional, and tech platforms.
          </p>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default Services;
