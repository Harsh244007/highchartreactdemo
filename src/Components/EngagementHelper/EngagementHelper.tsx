import { Options, SeriesSplineOptions } from "highcharts";
import { Channel, Message } from "../EngagementMessageOverTime/Types";

const filterChannelsWithMultipleDates = (
  messageCountList: Message[],
  channels: Channel[]
): Channel[] => {
  return channels.filter((channel) => {
    const messageCounts = messageCountList.filter(
      (message) => message.channelId === channel.value
    );
    return messageCounts.length > 1;
  });
};

export const engagementMessageOverTimeChartOptions = (
  messageCountList: Message[],
  channels: Channel[]
): Options => {
  const filteredChannels = filterChannelsWithMultipleDates(
    messageCountList,
    channels
  );

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
  });
  const options: Options = {
    chart: {
      type: "spline",
    },
    xAxis: {
      type: "datetime",
      labels: {
        formatter: function () {
          return dateFormatter.format(new Date(this.value));
        },
      },
    },
    yAxis: {
      title: {
        text: "Message Count",
      },
    },
    series: filteredChannels.map((channel) => {
      const data = messageCountList
        .filter((message) => message.channelId === channel.value)
        .map((message) => {
          const date = new Date(message.timeBucket);
          return {
            x: date.getTime(),
            y: parseInt(message.count),
          };
        });
      return {
        name: channel.name,
        type: "spline",
        data: data,
      } as SeriesSplineOptions;
    }),
  };

  return options;
};
