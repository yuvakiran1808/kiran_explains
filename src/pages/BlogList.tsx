import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Paper, Box, Typography, Chip } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { blogsData } from "../assets/data/blogsData";

const BlogList = () => {
  return (
    <Box display="flex" justifyContent="center" mt={6} mb={10} px={2}>
      <Box width="100%" maxWidth="768px" display="grid" gap={3} gridTemplateColumns="1fr">
        {blogsData.map((blog) => (
          <Link to={`/blog/${blog.id}`} key={blog.id} style={{ textDecoration: "none" }}>
            <Paper
              component={motion.div}
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              elevation={3}
              sx={{
                borderRadius: 2,
                bgcolor: "#fff",
                px: 3,
                py: 2,
                position: "relative",
                overflow: "hidden",
                transition: "box-shadow 0.3s ease",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

                "&:hover": {
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                },

                "& .arrow": {
                  opacity: 0,
                  transform: "translateX(0px)",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },

                "&:hover .arrow": {
                  opacity: 1,
                  transform: "translateX(6px)",
                },
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ color: "#111", fontWeight: 600 }} gutterBottom>
                  {blog.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#444", mb: 1 }}>
                  {blog.description}
                </Typography>
              </Box>

              <Box className="arrow">
                <ArrowForwardIcon sx={{ color: "#007a55", fontSize: 28 }} />
              </Box>
            </Paper>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default BlogList;
