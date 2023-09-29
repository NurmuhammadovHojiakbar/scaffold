import { useLocation, useNavigate } from "react-router-dom";
import { useGetCasesQuery } from "@/store/api/case-study";
import { CaseStudyItem } from "..";
import Pagination from "@/components/pagination";
import { queryMaker } from "@/utils/query";

const CaseStudyList = () => {
  const navigate = useNavigate();
  const { search: query } = useLocation();
  const queryObj = queryMaker(query);
  const { page } = queryObj;
  const { data: cases } = useGetCasesQuery(Number(page || 1));

  const pageChangeHandler = (page: number) => {
    navigate(`/case-study?page=${page}`);
  };

  return (
    <div className="case-study">
      <div className="container case-study__container">
        <ul className="case-study__list">
          {cases?.results.map((item) => (
            <CaseStudyItem case_study={item} key={item.id} />
          ))}
        </ul>
        {(cases?.count || 0) > 10 && (
          <Pagination
            currentPage={Number(page) || 1}
            total={cases?.count || 0}
            itemsPerPage={10}
            handler={pageChangeHandler}
          />
        )}
      </div>
    </div>
  );
};

export default CaseStudyList;
