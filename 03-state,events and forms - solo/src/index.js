import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="img.jpg" alt="Muhammad" />;
}

function Intro() {
  return (
    <div>
      <h1>Muhammad Khojiakbar Khusanov</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nostrum
        laudantium dolores. Rem quae molestias, eum perferendis minus quam
        corporis facere, explicabo assumenda ad eveniet? Vero libero nisi ipsam.
        Illo.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill} key={skill.name} />
      ))}
    </div>
  );
}

function Skill({ skill }) {
  console.log(skill);
  const bg = { backgroundColor: skill.color };
  let emoji = "";
  switch (skill.level) {
    case "beginner":
      emoji = "🥉";
      break;
    case "intermediate":
      emoji = "🥈";
      break;
    case "advanced":
      emoji = "🥇";
      break;
    default:
      break;
  }
  return (
    <div className="skill" style={bg}>
      {skill.skill} {emoji}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
