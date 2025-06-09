import {
  Box,
  Typography,
  Chip,
  Stack,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import "../styles/course.scss";
import { Link } from "react-router-dom";

import { motion } from "motion/react";

interface CourseProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

const MotionTypography = motion(Typography);
const MotionCard = motion(Card);

const Course = ({ id, title, description, imageUrl, tags }: CourseProps) => {
  return (
    <MotionCard
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{ width: "100%" }}
      className="course-modern-card"
      elevation={4}
    >
      <CardMedia
        component="img"
        image={imageUrl}
        alt={title}
        className="course-image"
      />
      <CardContent className="course-content">
        <Typography variant="h5" className="course-title">
          {title}
        </Typography>
        <Typography variant="body1" className="course-description">
          {description}
        </Typography>
        <Stack direction="row" spacing={1} className="course-tags">
          {tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              variant="outlined"
              sx={{ borderColor: "#007a55", color: "#007a55", fontWeight: 500 }}
            />
          ))}
        </Stack>
        <Box className="course-view-link">
          <Link to={`/course/${id}`} style={{ textDecoration: "none" }}>
            <MotionTypography
              variant="body1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#252424",
                fontWeight: 600,
                mt: 2,
                cursor: "pointer",
                transition: "color 0.2s",
                "&:hover": { color: "#007a55" },
              }}
            >
              View Course <ArrowOutwardIcon sx={{ fontSize: 24, ml: 0.5 }} />
            </MotionTypography>
          </Link>
        </Box>
      </CardContent>
    </MotionCard>
  );
};

export default Course;
