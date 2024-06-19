import { useLocation } from 'react-router-dom';

function IntroPar({ sectionName }) {
  const { pathname } = useLocation();
  let parStyles = {};

  if (pathname.includes('projects')) {
    parStyles = { padding: '0 2rem' };
  }

  const sectionIntros = {
    about: `Hi there, I'm Rafał. I create modern and responsive websites and web applications based on HTML, CSS and JavaScript environment as well as other related technologies.`,
    skills: `Here's a chart of what I have mainly learnt so far. The skills are of course impossible to measure so accurately, but I believe this is a pretty honest and genuine reflection of my current knowledge.`,
    contact: `If you happen to have any questions about my profile or potential cooperation, please feel free to contact me.`,
    projects: `This is a list of the projects I have gone through so far, some of them a couple of times in order to better acquire and understand the concepts and solutions included.`,
  };

  return (
    <p className="section-intro mb-5 txt-center" style={parStyles}>
      {sectionIntros[sectionName]}
    </p>
  );
}

export default IntroPar;
