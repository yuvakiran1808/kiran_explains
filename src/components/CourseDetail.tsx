import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import "../styles/courseDetail.scss";
import { coursesData } from "../assets/data/coursesData";

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = coursesData.find((c) => c.id === Number(courseId));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="course-detail-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box className="course-header">
        <Typography variant="h3" className="course-title">
          {course?.title}
        </Typography>
        <Typography variant="body1" className="course-subtext">
          {course?.description}
        </Typography>
      </Box>

      <Box className="video-list">
        {course?.sampleVideos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.4 }}
          >
            {/* <Paper elevation={3} className="video-card"> */}
            <Box
              key={index}
              sx={{
                my: 4,
                p: 2,
                borderRadius: "20px",
                backgroundColor: "#f9f9f9",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.01)",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
                },
              }}
            >
              <Typography variant="h6" mb={2} sx={{ color: "#007a55" }}>
                {video.title}
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  paddingTop: "56.25%" /* 16:9 Aspect Ratio */,
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <YouTube
                  videoId={video.url}
                  opts={{
                    width: "100%",
                    height: "100%",
                    playerVars: {
                      modestbranding: 1,
                      rel: 0,
                      showinfo: 0,
                      control:1,
                      fs:1
                    },
                  }}
                  className="youtube-embed"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            </Box>
            {/* </Paper> */}
          </motion.div>
        ))}
      </Box>
    </motion.div>
  );
};

export default CourseDetail;
