import { MailIcon, MapIcon, PhoneIcon } from "@/components/icons";

const ContactInfo = () => {
  const details = [
    {
      id: 1,
      icon: <MailIcon />,
      title: "Email Address",
      values: ["betascaffolding@outlook.com"],
    },
    {
      id: 2,
      icon: <PhoneIcon />,
      title: "Phone Number",
      values: ["+44 7436 659526"],
    },
    {
      id: 3,
      icon: <MapIcon />,
      title: "Office Address",
      values: ["86-90 Paul Street, London, United Kingdom, EC2A 4NE"],
    },
  ];
  return (
    <section className="contact-info">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="container contact-info__container"
      >
        <div className="contact-info__details">
          <h3 className="title-sm contact-info__title">Contact Us</h3>
          <h2 className="title-lg contact-info__heading">Get In Touch</h2>
          <ul className="contact-info__list">
            {details.map((detail) => (
              <li className="contact-info__item" key={detail.id}>
                {detail.icon}

                <div className="contact-info__item-wrapper">
                  <h3 className="title-lg contact-info__item-title">
                    {detail.title}
                  </h3>
                  {detail.values.map((val, ind) => (
                    <p className="contact-info__item-text" key={ind}>
                      {val}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <iframe
          className="contact-info__map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14523.791469078047!2d17.761031903086845!3d62.93334670871094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4664b8d5058eb411%3A0x7355888518fa70a3!2s872%2031%20Bergom%2C%20Sweden!5e0!3m2!1sen!2sus!4v1694960133243!5m2!1sen!2sus"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactInfo;
