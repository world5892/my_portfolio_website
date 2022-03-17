import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home">
      <h1 className="heading-1 mb-5 txt-center">
        <span className="heading-1__primary">Rafał Wojtkowiak</span>
        <span className="heading-1__secondary">I am a passionate Web Developer</span>
      </h1>
      <Link className="btn btn--primary btn--animated" to="/projects/html">
        View My Work
      </Link>
    </section>
  );
}

export default Home;
