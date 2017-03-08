import React from "react";
import { Appear, Heading, Text } from "spectacle";

export default class Why extends React.Component {
  render() {
    return(
      <div>
        <Heading size={1} fit caps lineHeight={1} margin="0 0 100px" textColor="secondary">
          Why do we need this?
        </Heading>
        {this.appearingText("We only get the data we need")}
        {this.appearingText("We can do all in a single request")}
        {this.appearingText("We are geeks, it's shiny and we want it")}
      </div>
    )
  }

  appearingText = (text) => {
    return(
      <Appear>
        <Text margin="20px 0 0" textColor="tertiary" size={6} fit bold>
          {text}
        </Text>
      </Appear>
    )
  }
}
