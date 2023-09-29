import useWindowWidth from "@/hooks/use-window-width";
import "./pagination.scss";
import usePagination from "@/hooks/use-pagination";
import { DoubleLeftIcon, DoubleRightIcon } from "../icons";

type PropType = {
  itemsPerPage: number;
  total: number;
  currentPage: number;
  handler: (page: number) => void;
};

const Pagination = ({
  currentPage,
  handler,
  itemsPerPage,
  total,
}: PropType) => {
  const width = useWindowWidth();
  const [ranges, DOTS] = usePagination({
    currentIndex: currentPage,
    itemsPerPage,
    totalItems: total,
    siblingCount: width > 610 ? 2 : 1,
  });

  return (
    <div className="pagination">
      <ul className="pagination-list">
        <li
          className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`}
        >
          <button
            onClick={() => handler(currentPage - 1)}
            className="pagination-button pagination-button__left"
          >
            <DoubleLeftIcon />
          </button>
        </li>
        {ranges.map((page: number | string, ind: number) => (
          <li className="pagination-item" key={ind}>
            {page === DOTS ? (
              page
            ) : (
              <button
                className={`pagination-button ${
                  page === currentPage ? "active" : ""
                }`}
                onClick={() => handler(Number(page))}
              >
                {page}
              </button>
            )}
          </li>
        ))}
        <li
          className={`pagination-item ${
            currentPage === ranges[ranges.length - 1] ? "disabled" : ""
          }`}
        >
          <button
            onClick={() => handler(currentPage + 1)}
            className="pagination-button pagination-button__right"
          >
            <DoubleRightIcon />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
