export interface Props {
  messageCountList: Message[];
  channels: Channel[];
}

export interface Message {
  count: string;
  timeBucket: string;
  channelId: string;
}

export interface Channel {
  label: string;
  value: string;
  type: any;
  name: any;
}
