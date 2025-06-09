import Course from "../components/Course";
import { coursesData } from "../assets/data/coursesData";
import Grid from "@mui/material/Grid2";
import onewheel from "../assets/one_wheel.webp";
import "../styles/courses.scss";

const Courses = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }} className="top-header">
          <h2>Level up as a developer.</h2>
          <h3>Invest in yourself with a premium dev courses in Telugu.</h3>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <img src={onewheel} alt="balance-img" className="balance-img" />
        </Grid>
      </Grid>
      <Grid container spacing={2} className="course-header">
        <Grid size={{ xs: 12, md: 12 }} className="center-content">
          <h2>Courses</h2>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ padding: "0rem 2rem 2rem 2rem" }}>
        {coursesData.map((eachcourse, index) => {
          return (
            <Grid
              key={index}
              size={{ xs: 12, md: 4 }}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Course
                key={index}
                id={eachcourse.id}
                title={eachcourse.title}
                description={eachcourse.description}
                imageUrl={eachcourse.imageUrl}
                tags={eachcourse.tags}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Courses;
