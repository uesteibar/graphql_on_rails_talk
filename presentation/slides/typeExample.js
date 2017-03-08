import React from "react";
import { Heading, CodePane } from "spectacle";

export default class typeExample extends React.Component {
  render() {
    return(
      <div>
        <Heading size={1} lineHeight={1} margin="0 0 50px" textColor="secondary">
          Types
        </Heading>
        <CodePane
          lang="ruby"
          source={require("raw-loader!../../assets/type.example")}
          textSize="25px"
          fit />
      </div>
    )
  }
}
