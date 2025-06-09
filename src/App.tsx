import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogList from "./pages/BlogList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Edits from "./pages/Edits";
import CourseDetail from "./components/CourseDetail";

const App = () => {
  

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/edits" element={<Edits />} />
            <Route path="/course/:courseId" element={<CourseDetail />} />
              <Route path="/blog/:blogId" element={<Blog />} />

          </Routes>
        </div>
        <Footer />
      </div>
     </ThemeProvider>
  );
};

export default App;
