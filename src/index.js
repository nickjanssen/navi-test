
import './index.css';

// index.js
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { app, createBrowserNavigation, createPage, createSwitch } from 'navi'

import App from './App'
import { NavProvider, NavContent } from 'react-navi'

class AppWrapper extends React.Component {
  render() {
    return (
      <NavProvider navigation={this.props.navigation}>
        <NavContent />
      </NavProvider>
    );
  }
}

const pages = createSwitch({
  paths: {
    "/": createPage({
      content: <App />
    })
  }
});

app({
  // Specify the pages that navi-app should statically build, by passing
  // in a Switch object
  pages,

  // The default create-react-app renderer needs access to the App
  // component.
  exports: AppWrapper,

  async main() {
    let navigation = createBrowserNavigation({
      pages,
    })

    // Wait until the navigation has loaded the page's content,
    // or failed to do so. If you want to load other data in parallel
    // while the initial page is loading, make sure to start loading
    // before this line.
    await navigation.steady()

    // React requires that you call `ReactDOM.hydrate` if there is
    // statically rendered content in the root element, but prefers
    // us to call `ReactDOM.render` when it is empty.
    let hasStaticContent = process.env.NODE_ENV === 'production'
    let renderer = hasStaticContent ? ReactDOM.hydrate : ReactDOM.render

    // Start react.
    renderer(
      <AppWrapper navigation={navigation} />,
      document.getElementById('root')
    )
  }
})
