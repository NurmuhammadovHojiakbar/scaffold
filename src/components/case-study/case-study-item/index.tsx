import { ClockIcon, UserIcon } from "@/components/icons";
import { CaseStudyInterface } from "@/interfaces/case-study";

type PropType = {
  case_study: CaseStudyInterface;
};

const CaseStudyItem = ({ case_study }: PropType) => {
  return (
    <li className="case-study__item">
      <div className="case-study__item-wrapper">
        <img
          className="case-study__item-img"
          src={`${import.meta.env.VITE_BASE_URL}${case_study.images[0]}`}
          alt="Clients"
          height={450}
        />
      </div>
      <div className="case-study__item-details">
        <h3 className="case-study__item-type">
          {case_study.case_category.title}
        </h3>
        <h2 className="case-study__item-title">{case_study.title}</h2>
        <p className="case-study__item-desc">{case_study.description}</p>
        <div className="case-study__item-info">
          <p className="case-study__item-client">
            <UserIcon className="case-study__item-icon" />
            <span>{case_study.client}</span>
          </p>
          <p className="case-study__item-time">
            <ClockIcon className="case-study__item-icon" />
            <span>{case_study.date}</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default CaseStudyItem;
