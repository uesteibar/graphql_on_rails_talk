import React from "react";
import { Appear, Heading, Text } from "spectacle";

export default class How extends React.Component {
  render() {
    return(
      <div>
        <Heading size={1} fit caps lineHeight={1} margin="0 0 100px" textColor="secondary">
          How does it work?
        </Heading>
        {this.appearingText("[BE] You define Types in your GraphQL Schema")}
        {this.appearingText("[BE] You define attributes for those types")}
        {this.appearingText("[BE] You define 'fields'")}
        {this.appearingText("[FE] You query exactly the data you need!")}
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
