import Grid from "@mui/material/Grid2";
import "../styles/navbar.scss";
// import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import githublogo from "../assets/github-logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // const onClickModeChange = () => {
  //   setMode(mode === "light" ? "dark" : "light");
  // };

  const navigate = useNavigate();
  const navItems = [
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "Blogs", url: "/blogs" },
    { name: "Edits", url: "/edits" },
  ];
  const [active, setActive] = useState("Home");
  // console.log(active);
  return (
    <Grid container spacing={2} className="nav-container">
      <Grid size={{ md: 4 }} className="center-content">
        <h2>Kiran_Explains</h2>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <div className="nav-items">
          {navItems.map((item, index) => {
            return (
              <h3
                key={index}
                className={active === item.name ? "active" : ""}
                onClick={() => {
                  setActive(item.name);
                  navigate(item.url);
                }}
              >
                {item.name}
              </h3>
            );
          })}
        </div>
      </Grid>
      <Grid size={{ md: 4 }} className="center-content">
        <div className="btn-con">
          {/* <div className="nav-btn" onClick={onClickModeChange}>
            {mode === "dark" ? (
              <LightModeOutlinedIcon />
            ) : (
              <DarkModeOutlinedIcon />
            )}
            </div> */}
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
