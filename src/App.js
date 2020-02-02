import React, { Component } from 'react';
import Recipe from './Recipe';
import Story from './Story';
import Video from './Video';
const convert = require('xml-js');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latestRecipe: '',
      latestStory: ''
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
          <div className="content video">
            <h2>Latest Gourmet Makes</h2>
            <Video />
            <a
              href="https://www.youtube.com/user/BonAppetitDotCom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>More Videos</button>
            </a>
          </div>
        </main>
        <footer>
          <p>
            ©2020 Asha Misra{' '}
            <span role="img" aria-label="elephant emoji">
              &#128024;
            </span>
          </p>
          <a
            href="https://github.com/aafmisra/bon-appetit-feed"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out the repo on GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/asha-misra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Find me on LinkedIn
          </a>
          <a
            href="https://www.bonappetit.com/story/rss-feeds"
            target="_blank"
            rel="noopener noreferrer"
          >
            bon appètit's RSS feeds
          </a>
        </footer>
      </div>
    );
}
}

export default App;
