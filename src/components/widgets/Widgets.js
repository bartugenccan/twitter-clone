import React from "react";

import { Search } from "@material-ui/icons";

import { Tweet, Timeline, Share } from "react-twitter-widgets";

//CSS
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <Search className="widgets-searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets-widgetContainer">
        <h2>What's happening</h2>
        <Tweet tweetId={"1307046632517664771"} />
        <Timeline
          sourceType="profile"
          screenName="bartugenccan"
          options={{ height: 400 }}
        />
        <Share
          url={"github.com/bartugenccan"}
          options={{ text: "Frontend (React) Developer" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
