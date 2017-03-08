import React from "react";
import { Heading, CodePane } from "spectacle";

export default class JsonResponseExample extends React.Component {
  render() {
    return(
      <div>
        <Heading size={1} lineHeight={1} margin="0 0 50px" textColor="secondary">
          The response
        </Heading>
        <CodePane
          lang="json"
          source={require("raw-loader!../../assets/json_response.example")}
          textSize="15px"
          fit />
      </div>
    )
  }
}
