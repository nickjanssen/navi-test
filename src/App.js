import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

import iconFontFontAwesome from "react-native-vector-icons/Fonts/FontAwesome.ttf";

const iconFontStyles = `
@font-face {
    src: url(${iconFontFontAwesome});
    font-family: FontAwesome;
  }
`;

// Create stylesheet
const style = document.createElement("style");
style.type = "text/css";
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Icon name="rocket" size={90} color="lightblue" />
        </header>
      </div>
    );
  }
}

export default App;
