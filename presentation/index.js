// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "white",
  secondary: "#006567",
  tertiary: "#545454",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

import Title from './slides/title'
import What from './slides/what'
import How from './slides/how'
import CodePrevious from './slides/codePrevious'
import Why from './slides/why'
import Closing from './slides/closing'
import Credits from './slides/credits'

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={300} theme={theme}>
        <Slide transition={["fade"]}>
          <Title />
        </Slide>
        <Slide transition={["fade"]}>
          <What />
        </Slide>
        <Slide transition={["fade"]}>
          <How />
        </Slide>
        <Slide transition={["fade"]}>
          <CodePrevious />
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/type.example")}
          ranges={[
            { loc: [0, 8], title: "Types" },
            { loc: [0, 1], note: "Type declaration" },
            { loc: [1, 3], note: "Add name and description" },
            { loc: [4, 6], note: "Add name and description" },
          ]}/>
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/query.example")}
          ranges={[
            { loc: [0, 1], title: "Queries" },
            { loc: [1, 3], note: "Add name and description" },
            { loc: [4, 10], note: "Define the fields" },
            { loc: [4, 5], note: "Field name" },
            { loc: [5, 6], note: "Returned type" },
            { loc: [6, 9], note: "How to solve the request" },
            { loc: [13, 14], note: "You can also add parameters" },
            { loc: [14, 17], note: "And get them from args" },
          ]}/>
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/json_query.example")}
          ranges={[
            { loc: [0, 0], title: "Json request body" },
            { loc: [1, 5], note: "We can query all hashtags" },
            { loc: [2, 4], note: "And get id and tag" },
            { loc: [6, 9], note: "We can also get a hashtag with a specific ID" },
            { loc: [7, 8], note: "But only get the tag" },
            { loc: [0, 11], title: "In a single request!!" },
          ]}/>
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/json_response.example")}
          ranges={[
            { loc: [0, 0], title: "Json response" },
            { loc: [1, 11] },
            { loc: [12, 15] },
            { loc: [0, 0], title: "AWESOME!" },
          ]}/>
        <Slide transition={["fade"]}>
          <Why />
        </Slide>
        <Slide transition={["fade"]}>
          <Closing />
        </Slide>
        <Slide transition={["fade"]}>
          <Credits />
        </Slide>
      </Deck>
    );
  }
}
