import { skills } from "../../constants";

const Skill = () => (
  <div style={{ display: "flex", flexWrap: "wrap", marginTop: "1rem" }}>
    {skills.map(({ color, icon, name }, id) => (
      <span key={id} className="tech">
        <span style={{ display: "flex", color: color }}>{icon}</span>
        <code className="code">{name}</code>
      </span>
    ))}
  </div>
);

export default Skill;
