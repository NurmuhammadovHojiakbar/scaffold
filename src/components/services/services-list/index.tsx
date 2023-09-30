import { useGetServicesQuery } from "@/store/api/services";

const ServicesList = () => {
  const { data: services } = useGetServicesQuery();

  return (
    <section className="services-list">
      <div className="container container-sm">
        <ul className="services-list__list">
          {services?.map((serv) => (
            <li className="services-list__item" key={serv.id}>
              <div className="services-list__item-wrapper">
                <img
                  className="services-list__item-img"
                  src={serv.image}
                  alt="Service"
                />
              </div>
              <h2 className="services-list__item-title">{serv.title}</h2>
              <div
                className="services-list__item-desc"
                dangerouslySetInnerHTML={{ __html: serv.description }}
              ></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesList;
