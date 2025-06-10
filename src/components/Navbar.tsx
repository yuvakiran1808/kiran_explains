import Grid from "@mui/material/Grid";
import "../styles/navbar.scss";
import githublogo from "../assets/github-logo.png";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "Blogs", url: "/blogs" },
    { name: "Edits", url: "/edits" },
  ];

  const getActiveTab = () => {
    const currentPath = location.pathname;
    const matchedItem = navItems.find((item) => item.url === currentPath);
    return matchedItem ? matchedItem.name : "";
  };

  const active = getActiveTab();

  return (
    <Grid container spacing={2} className="nav-container">
      <Grid item md={4} className="center-content">
        <h2>Kiran_Explains</h2>
      </Grid>

      <Grid item xs={12} md={4}>
        <div className="nav-items">
          {navItems.map((item, index) => (
            <h3
              key={index}
              className={active === item.name ? "active" : ""}
              onClick={() => navigate(item.url)}
            >
              {item.name}
            </h3>
          ))}
        </div>
      </Grid>

      <Grid item md={4} className="center-content">
        <div className="btn-con">
          <div className="nav-btn">
            <a
              href="https://github.com/yuvakiran1808"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="github-logo" src={githublogo} alt="github" />
            </a>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Navbar;
