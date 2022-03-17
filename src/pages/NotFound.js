import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="not-found page">
      <p className="not-found__par mb-4">Unfortunately, this page does not exist.</p>
      <Link to="/" className="btn btn--primary">
        Back Home
      </Link>
    </section>
  );
}

export default NotFound;
