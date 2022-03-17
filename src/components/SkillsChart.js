function SkillsChart({ technology, progress }) {
  const progressStyles = {
    width: progress,
  };

  return (
    <div className="skills-chart__box">
      <div className="skills-chart__text">
        <h4 className="skills-chart__tech">{technology}</h4>
        <p className="skills-chart__percentage">{progress}</p>
      </div>
      <div className="skills-chart__progress">
        <div className="skills-chart__progress-wrapper" style={progressStyles}>
          <div className="skills-chart__progress-bar"></div>
        </div>
      </div>
    </div>
  );
}

export default SkillsChart;
