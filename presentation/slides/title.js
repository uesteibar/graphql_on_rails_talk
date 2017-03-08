import React from "react";
import { Heading, Text } from "spectacle";

export default class Title extends React.Component {
  render() {
    return(
      <div>
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          GraphQL on Rails
        </Heading>
        <Text margin="100px 0 0" textColor="tertiary" size={6} bold>
          Getting started
        </Text>
      </div>
    )
  }
}
