import { MailIcon, MessageIcon, PhoneIcon, UserIcon } from "@/components/icons";

const ContactTouch = () => {
  return (
    <section className="contact-touch">
      <div className="container contact-touch__container">
        <h3 className="title-sm contact-touch__title">Let's talk</h3>
        <h2 className="title-lg contact-touch__heading">Get in touch</h2>

        <form className="contact-touch__form">
          <div className="contact-touch__form-wrapper">
            <label className="contact-touch__form-label">
              <input
                className="contact-touch__form-input"
                type="text"
                placeholder="Enter your name"
                required
                name="name"
              />
              <UserIcon />
            </label>
            <label className="contact-touch__form-label">
              <input
                className="contact-touch__form-input"
                type="tel"
                placeholder="Enter your phone number"
                required
                name="number"
              />
              <PhoneIcon />
            </label>
            <label className="contact-touch__form-label">
              <input
                className="contact-touch__form-input"
                type="email"
                placeholder="Enter your email"
                required
                name="email"
              />
              <MailIcon />
            </label>
          </div>
          <label className="contact-touch__form-label textarea">
            <textarea
              className="contact-touch__form-textarea"
              placeholder="Enter your message"
              required
              rows={15}
              name="message"
            />
            <MessageIcon />
          </label>
          <button className="btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactTouch;
