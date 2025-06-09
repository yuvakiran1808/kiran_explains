import Grid from "@mui/material/Grid2";
import "../styles/footer.scss";
import { FaGithub, FaYoutube, FaInstagram } from "react-icons/fa";
import { IconButton } from "@mui/material";

const Footer = () => {
  const iconColor = "#007a55";

  return (
    <Grid container spacing={0} className="footer-con">
      {/* social icons */}
      <Grid size={12} className="footer-icons-con">
        <IconButton
          className="social-icons"
          component="a"
          href="https://github.com/yuvakiran1808"
          target="_blank"
          rel="noopener"
        >
          <FaGithub size={30} color={iconColor} />
        </IconButton>

        <IconButton
          className="social-icons"
          component="a"
          href="https://www.youtube.com/@yuvasaikiran2259"
          target="_blank"
          rel="noopener"
        >
          <FaYoutube size={30} color={iconColor} />
        </IconButton>

        <IconButton
          className="social-icons"
          component="a"
          href="https://www.instagram.com/kiran_explains/"
          target="_blank"
          rel="noopener"
        >
          <FaInstagram size={30} color={iconColor} />
        </IconButton>
      </Grid>

      {/* copyright */}
      <Grid size={12} className="footer-mark">
        <p>&copy; 2025 Kiran_Explains. All Rights Reserved</p>
      </Grid>
    </Grid>
  );
};

export default Footer;
