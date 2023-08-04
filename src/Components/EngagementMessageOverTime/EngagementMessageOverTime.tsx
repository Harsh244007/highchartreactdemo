import React, { useMemo } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Props } from "./Types";
import "./EngagementMessagesOverTime.css";
import engagementMessageOverTimeChartOptions from "../EngagementHelper";
const EngagementMessagesOverTime: React.FC<Props> = ({
  messageCountList,
  channels,
}) => {
  const options = useMemo(
    () => engagementMessageOverTimeChartOptions(messageCountList, channels),
    [messageCountList, channels]
  );

  return (
    <div className="chart-container">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default EngagementMessagesOverTime;
