import React from "react";
import { Heading, CodePane } from "spectacle";

export default class QueryExample extends React.Component {
  render() {
    return(
      <div>
        <Heading size={1} lineHeight={1} margin="0 0 50px" textColor="secondary">
          Queries
        </Heading>
        <CodePane
          lang="ruby"
          source={require("raw-loader!../../assets/query.example")}
          textSize="15px"
          fit />
      </div>
    )
  }
}
