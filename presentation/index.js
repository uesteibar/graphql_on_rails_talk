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

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

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
import TypeExample from './slides/typeExample'
import QueryExample from './slides/queryExample'
import JsonQueryExample from './slides/jsonQueryExample'
import JsonResponseExample from './slides/jsonResponseExample'

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
        <Slide transition={["fade"]}>
          <TypeExample />
        </Slide>
        <Slide transition={["fade"]}>
          <QueryExample />
        </Slide>
        <Slide transition={["fade"]}>
          <JsonQueryExample />
        </Slide>
        <Slide transition={["fade"]}>
          <JsonResponseExample />
        </Slide>
      </Deck>
    );
  }
}
