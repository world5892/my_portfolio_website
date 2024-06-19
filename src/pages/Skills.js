import SkillsChart from '../components/SkillsChart';
import Header from '../components/Header';

function Skills() {
  return (
    <section className="skills page">
      <Header />

      <div className="skills-chart">
        <SkillsChart technology="HTML" progress="90%" />
        <SkillsChart technology="CSS" progress="90%" />
        <SkillsChart technology="JavaScript" progress="85%" />
        <SkillsChart technology="TypeScript" progress="70%" />
        <SkillsChart technology="React" progress="80%" />
        <SkillsChart technology="Node.js" progress="55%" />
        <SkillsChart technology="MongoDB" progress="40%" />
      </div>
    </section>
  );
}

export default Skills;
