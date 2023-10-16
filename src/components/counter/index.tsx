import Chart from "../chart";
import "./counter.scss";

type PropType = {
  title?: string;
  heading?: string;
  color: string;
  trackColor: string;
  textColor: string;
  detailsColor: string;
  bgColor: string;
  titleColor: string;
};

const Counter = ({
  heading,
  title,
  bgColor,
  color,
  detailsColor,
  textColor,
  titleColor,
  trackColor,
}: PropType) => {
  const stats = [
    {
      id: 1,
      title: "Project done",
      desc: "Construction Simulator",
      procent: 300,
    },
    {
      id: 2,
      title: "Happy clients",
      desc: "Construction Simulator",
      procent: 96,
    },
    {
      id: 3,
      title: "Completed co.",
      desc: "Construction Simulator",
      procent: 97,
    },
    {
      id: 4,
      title: "Country cover",
      desc: "Construction Simulator",
      procent: 99,
    },
  ];

  return (
    <section className="counter" style={{ backgroundColor: bgColor }}>
      <h2
        className="counter-title"
        style={{ WebkitTextStrokeColor: titleColor }}
      >
        Counter
      </h2>
      <div className="container container-sm counter-container">
        {title && (
          <h3 className="title-sm counter-container__title">{title}</h3>
        )}
        {heading && (
          <h2
            className="title-lg counter-container__heading"
            dangerouslySetInnerHTML={{ __html: heading }}
          ></h2>
        )}

        <ul className="counter-list">
          {stats.map((stat) => (
            <li className="counter-item">
              <Chart
                percent={stat.procent}
                color={color}
                trackColor={trackColor}
                textColor={textColor}
              />
              <h2
                className="counter-item__title"
                style={{ color: detailsColor }}
              >
                {stat.title}
              </h2>
              <p className="counter-item__text" style={{ color: detailsColor }}>
                {stat.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Counter;
