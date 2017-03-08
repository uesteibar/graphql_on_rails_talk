import React from "react";
import { Heading, CodePane } from "spectacle";

export default class JsonQueryExample extends React.Component {
  render() {
    return(
      <div>
        <Heading size={1} lineHeight={1} margin="0 0 50px" textColor="secondary">
          From the FE
        </Heading>
        <CodePane
          lang="json"
          source={require("raw-loader!../../assets/json_query.example")}
          textSize="20px"
          fit />
      </div>
    )
  }
}
