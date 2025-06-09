import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJava
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiJavascript,
  SiDjango,
  SiHibernate,
  SiRedux
} from "react-icons/si";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";

// Variants for parent container
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Variants for each skill card
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Skills = () => {
  const skills = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
     { icon: <FaJava />, name: "Java" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiHibernate />, name: "Hibernate" },
    { icon: <SiRedux />, name: "Redux" },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Grid container spacing={2} className="icon-skills-section">
        {skills.map((skill, index) => (
          <Grid size={{ xs: 6, sm: 4, md: 2 }} key={index}>
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 0.8 }}
              whileTap={{ scale: 0.95 }}
              className="tech-skill"
            >
              <div className="tech-icon">{skill.icon}</div>
              <span>{skill.name}</span>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default Skills;
