import Slider from './Slider';

function ProjectsSection() {
  return (
    <>
      <Slider />
      <p className="projects__info-par">
        *All these projects were done at different times, therefore some of them include techniques
        that might not be common or preferred any more, e.g. 'float' property. Also, some of them
        might seem incomplete and/or miss some features, like, for example, a nice CSS layout. This
        is because they weren't meant to be complete websites and I was rather focused on achieving
        a particular learning goal while doing them.
      </p>
    </>
  );
}

export default ProjectsSection;
