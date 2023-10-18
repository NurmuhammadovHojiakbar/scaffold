import { CircularProgressBar } from "react-percentage-bar";
import "./chart.scss";

type PropType = {
  percent: number;
  color: string;
  trackColor: string;
  textColor: string;
  text?: string;
};

const Chart = ({ color, percent, trackColor, textColor, text }: PropType) => {
  return (
    <div className="chart">
      <CircularProgressBar
        duration={8000}
        color={color}
        trackColor={trackColor}
        size={"11px"}
        text={text}
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
