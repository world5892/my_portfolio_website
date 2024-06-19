import Header from '../components/Header';
import myPhoto from '../img/profile-photo-small.jpg';
import { ReactComponent as ArrowRight } from '../img/SVG/chevron-right.svg';

function About() {
  return (
    <section className="about page">
      <Header />

      <div className="about__main">
        <figure className="about__photo-wrapper">
          <img src={myPhoto} alt="me" className="about__photo" />
        </figure>

        <div className="about__info">
          <h3 className="heading-3 mb-1">Front-end Web Developer</h3>
          <ul className="about__list mb-1">
            <li className="about__item">
              <ArrowRight className="about__icon" />
              Birthday:
              <span className="about__span">5 August 1992</span>
            </li>
            <li className="about__item">
              <ArrowRight className="about__icon" />
              Phone:
              <span className="about__span">(+48) 512 416 424</span>
            </li>
            <li className="about__item">
              <ArrowRight className="about__icon" />
              Age:
              <span className="about__span">32</span>
            </li>
            <li className="about__item">
              <ArrowRight className="about__icon" />
              Email:
              <span className="about__span">wojktowiak.rafal@protonmail.com</span>
            </li>
          </ul>
        </div>

        <div className="about__description">
          I've been dealing with programming websites and web applications for a few of years now.
          During this time I've read a couple of books and covered a lot of courses, which helped me
          gain quite a good understanding of front-end web development. Although I haven't graduated
          from a programming school, I believe I've already acquired enough knowledge to become a
          valuable part of a software developers' team.
        </div>
      </div>
    </section>
  );
}

export default About;
