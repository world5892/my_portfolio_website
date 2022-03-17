import { ReactComponent as ArrowRightIcon } from '../img/SVG/chevron-right.svg';

function Slide({ numSlide, curSlide, project, toggleDetails, onImageLoad }) {
  const moveBy = 100 * (numSlide - curSlide);
  const projectGoals = project.goal.split('; ');
  const overlayStyles = {
    transform: toggleDetails ? 'translate(0)' : 'translateY(-100%)',
    opacity: toggleDetails ? '1' : '0',
  };

  const imgStyles = {
    filter: toggleDetails ? 'brightness(30%) blur(5px)' : 'brightness(100%) blur(0)',
  };

  return (
    <div
      className="slider__slide"
      style={{
        transform: `translate(${moveBy}%)`,
      }}
    >
      <img
        className="slider__img"
        src={project.imageUrl}
        alt="project-screenshot"
        onLoad={onImageLoad}
        style={imgStyles}
      />
      <div className="slider__overlay" style={overlayStyles}>
        <h3 className="slider__heading mb-5">{project.name}</h3>
        <div className="slider__infobox">
          <ul className="slider__goal-list">
            <span className="slider__list-title">Goals:</span>
            {projectGoals.map((el, i) => (
              <li key={i} className="slider__item">
                <ArrowRightIcon className="slider__icon" />
                {el}
              </li>
            ))}
          </ul>

          <div className="slider__small-rule"></div>

          <div className="slider__navbox">
            <a
              href={project.website}
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary btn--small"
            >
              See Website
            </a>

            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="btn btn--secondary btn--small"
            >
              Review Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
