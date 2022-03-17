import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import { db } from '../firebase.config';
import { toast } from 'react-toastify';

function LogIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const { email, password } = formData;

  const handleFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      await signInWithEmailAndPassword(auth, email, password);

      navigate('/admin');
    } catch (err) {
      toast.error('Bad User Credentials', {
        toastId: 'custom-id-yes',
      });
    }
  };

  return (
    <section className="login page">
      <p className="login__info mb-3">
        If you are the administrator of this website and want to manage the projects, please log in
        to get access.
      </p>
      <form onSubmit={handleFormSubmit} className="login-form">
        <div className="login-form__box login-form__box--email">
          <input
            type="email"
            id="email"
            className="login-form__input"
            value={email}
            placeholder="Enter your email..."
            onChange={handleFormDataChange}
          />
        </div>

        <div className="login-form__box login-form__box--email">
          <input
            type="password"
            id="password"
            className="login-form__input"
            value={password}
            placeholder="Enter your password..."
            onChange={handleFormDataChange}
          />
        </div>

        <div className="login-form__box login-form__box--btn">
          <button type="submit" className="btn btn--primary">
            Log In
          </button>
        </div>
      </form>
    </section>
  );
}

export default LogIn;
