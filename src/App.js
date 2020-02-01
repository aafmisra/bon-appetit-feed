import React, { Component } from 'react';
import Recipe from './Recipe';
import Story from './Story';
import Video from './Video';
const convert = require('xml-js');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latestRecipe: 0,
      latestStory: 0
    }
  }

  componentDidMount() {
    const recipeURL = 'https://www.bonappetit.com/feed/latest-recipes/rss'

    fetch(recipeURL)
    .then(response => response.text())
      .then(data => {
        let result1 = JSON.parse(convert.xml2json(data, { compact: true, spaces: 4 }));
        this.setState({ latestRecipe: result1 })
      })

    const storyURL = 'https://www.bonappetit.com/feed/stories/rss';

    fetch(storyURL)
      .then(response => response.text())
      .then(data => {
        let result2 = JSON.parse(convert.xml2json(data, { compact: true, spaces: 2 }));
        this.setState({ latestStory: result2 });
      });
  }

  render() {
    console.log(this.state.latestStory)
    return (
      <div className="App">
        <header>
          <h1>bon appétit feed</h1>
          <p>a small sampling of ba's latest content</p>
        </header>
        <main>

        {this.state.latestRecipe && (
          <Recipe latestRecipe={this.state.latestRecipe} />
          )}
        {this.state.latestStory && (
          <Story latestStory={this.state.latestStory} />
          )}
        <Video />
          </main>
          <footer></footer>
      </div>
    );
}
}

export default App;
