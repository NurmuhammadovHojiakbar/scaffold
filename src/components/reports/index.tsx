import axios from "axios";
import { useEffect, useState } from "react";
import "./main.scss";
const Reports = () => {
  const [data, setData] = useState([]);
  type PropType = {
    content: string;
    name: string;
    email: string;
    created: string;
    image: string;
  };
  useEffect(() => {
    axios
      .get(`https://admin.betascaffolding.com/api/case/report/list/`)
      .then((response) => {
        console.log(response);

        setData(response.data?.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="reports container">
        {data?.map((i: PropType) => (
          <div className="report-card">
            <div className="card-title">
              <h2>{i?.content}</h2>
            </div>
            <div className="card-details">
              <div className="info">
                <div>
                  <h3>{i?.name}</h3>
                  <img src={i.image} alt="" />
                </div>
                <span>{i.created.slice(0, 10)}</span>
              </div>
              <h4>{i?.email}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reports;
