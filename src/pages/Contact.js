import { useState } from 'react';
import Header from '../components/Header';
import { ReactComponent as LocationIcon } from './../img/SVG/location-pin.svg';
import { ReactComponent as ShareIcon } from './../img/SVG/share.svg';
import { ReactComponent as MailIcon } from './../img/SVG/mail.svg';
import { ReactComponent as MobileIcon } from './../img/SVG/mobile.svg';
import { ReactComponent as FacebookIcon } from './../img/SVG/facebook-with-circle.svg';
import { ReactComponent as TwitterIcon } from './../img/SVG/twitter-with-circle.svg';
import { ReactComponent as LinkedInIcon } from './../img/SVG/linkedin.svg';

function Contact() {
  const [formData, setFormData] = useState({ subject: '', message: '' });

  const { subject, message } = formData;
  const myEmail = 'world5892@gmail.com';

  const handleFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleFormDataClick = () => {
    const formDataTimer = setTimeout(() => {
      setFormData({
        subject: '',
        message: '',
      });
    }, 0);

    clearTimeout(formDataTimer);
  };

  return (
    <section className="contact page">
      <Header />

      <div className="contact-details mb-4">
        <div className="contact-details__box">
          <div className="contact-details__icon-box">
            <LocationIcon className="contact-details__icon" />
          </div>
          <h4 className="contact-details__heading">My Address</h4>
          <p className="contact-details__text">
            222 J. Słowackiego St, Piotrków Trybunalski, 97300
          </p>
        </div>

        <div className="contact-details__box">
          <div className="contact-details__icon-box">
            <ShareIcon className="contact-details__icon" />
          </div>
          <h4 className="contact-details__heading">Social Profiles</h4>
          <p className="contact-details__text">
            <a
              href="https://www.facebook.com/profile.php?id=100003613405051"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-details__link contact-details__link--fb"
            >
              <FacebookIcon className="contact-details__social contact-details__social--fb" />
            </a>

            <a
              href="https://twitter.com/world5892"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-details__link contact-details__link--tw"
            >
              <TwitterIcon className="contact-details__social contact-details__social--tw" />
            </a>

            <a
              href="https://www.linkedin.com/in/rafał-wojtkowiak-3928a3234"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-details__link contact-details__link--linkedIn"
            >
              <LinkedInIcon className="contact-details__social contact-details__social--linkedIn" />
            </a>
          </p>
        </div>

        <div className="contact-details__box">
          <div className="contact-details__icon-box">
            <MailIcon className="contact-details__icon" />
          </div>
          <h4 className="contact-details__heading">Email Me</h4>
          <p className="contact-details__text">wojtkowiak.rafal@protonmail.com</p>
        </div>

        <div className="contact-details__box">
          <div className="contact-details__icon-box">
            <MobileIcon className="contact-details__icon" />
          </div>
          <h4 className="contact-details__heading">Call Me</h4>
          <p className="contact-details__text">(+48) 512 416 424</p>
        </div>
      </div>

      <form className="contact-form mb-5">
        <div className="contact-form__box contact-form__box--subject">
          <input
            type="text"
            id="subject"
            className="contact-form__input"
            value={subject}
            placeholder="Subject"
            onChange={handleFormDataChange}
          />
        </div>

        <div className="contact-form__box contact-form__box--message">
          <textarea
            id="message"
            className="contact-form__input"
            value={message}
            placeholder="Message"
            onChange={handleFormDataChange}
          ></textarea>
        </div>

        <div className="contact-form__box contact-form__box--btn">
          <a href={`mailto:${myEmail}?Subject=${subject}&body=${message}`}>
            <button type="button" className="btn btn--primary" onClick={handleFormDataClick}>
              Send Message
            </button>
          </a>
        </div>
      </form>
    </section>
  );
}

export default Contact;
