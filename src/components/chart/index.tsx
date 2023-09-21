import { CircularProgressBar } from "react-percentage-bar";
import "./chart.scss";

type PropType = {
  percent: number;
  color: string;
  trackColor: string;
  textColor: string;
};

const Chart = ({ color, percent, trackColor, textColor }: PropType) => {
  return (
    <div className="chart">
      <CircularProgressBar
        color={color}
        trackColor={trackColor}
        size={"11px"}
        percentage={percent}
        radius="100px"
        percentageStyle={{
          color: textColor,
          fontWeight: "700",
          fontSize: "32px",
        }}
      />
    </div>
  );
};

export default Chart;
