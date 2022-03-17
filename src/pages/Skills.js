import SkillsChart from '../components/SkillsChart';
import Header from '../components/Header';

function Skills() {
  return (
    <section className="skills page">
      <Header />

      <div className="skills-chart">
        <SkillsChart technology="HTML" progress="95%" />
        <SkillsChart technology="CSS" progress="95%" />
        <SkillsChart technology="JavaScript" progress="90%" />
        <SkillsChart technology="React" progress="80%" />
        <SkillsChart technology="Node.js" progress="55%" />
        <SkillsChart technology="MongoDB" progress="40%" />
      </div>
    </section>
  );
}

export default Skills;
