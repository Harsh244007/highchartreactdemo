import React from 'react';
import './App.css';
import EngagementMessagesOverTime from './Components/EngagementMessageOverTime/EngagementMessageOverTime';
import CHANNELSJSON from "./Configs/JSON/channels.json"
import MESSAGECOUNTLISTJSON from "./Configs/JSON/messageCountList.json"
function App() {
  return (
    <div className="App">
         <h1>Engagement Messages Over Time</h1>
      <EngagementMessagesOverTime
        messageCountList={MESSAGECOUNTLISTJSON}
        channels={CHANNELSJSON}
      />
    </div>
  );
}

export default App;
