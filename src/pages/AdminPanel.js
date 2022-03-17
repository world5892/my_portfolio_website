// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
// import { collection, getDocs, query, where, orderBy, limit, startAfter } from 'firebase/firestore';
// import { db } from '../firebase.config';
// import { toast } from 'react-toastify';

function AdminPanel() {
  const auth = getAuth();
  // const [listings, setListings] = useState([]);
  // const [name, setName] = useState(auth.currentUser.displayName);
  // const [email, setEmail] = useState(auth.currentUser.email);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    auth.signOut();
    navigate('/login');
  };

  const handleLoginClick = () => navigate('/login');

  // todo: add functionality
  return (
    <section className="admin page">
      <p className="admin__info mb-2">
        {auth.currentUser
          ? 'Here you can add, update and delete your projects (not implemented yet).'
          : 'You must be logged in to manage the projects.'}
      </p>
      <button
        className="btn btn--primary"
        onClick={auth.currentUser ? handleLogoutClick : handleLoginClick}
      >
        {auth.currentUser ? 'Log out' : 'Back to login page'}
      </button>

      {/* {auth.currentUser ? (
        <>
          <p className="admin-info mb-2">
            Here you can add, update and delete your projects (not implemented yet).
          </p>
          <button className="btn btn--primary" onClick={handleLogoutClick}>
            Log out
          </button>
        </>
      ) : (
        <>
          <p className="admin-info mb-2">You must be logged in to manage the projects.</p>
          <button className="btn btn--primary" onClick={handleLoginClick}>
            Back to login page
          </button>
        </>
      )} */}
    </section>
  );
}

export default AdminPanel;
