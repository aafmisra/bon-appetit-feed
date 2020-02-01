import React from 'react';

function Story(props) {
  let story = props.latestStory.rss.channel.item[0];
  let date = story.pubDate._text
    .split(' ')
    .splice(0, 4)
    .join(' ');
  return (
    <div className="content">
      <h2>Latest Story</h2>
      <h3>{story.title._text}</h3>
      <span>by: {story['dc:creator']._text}</span>
      <span className="date">{date}</span>
      <img
        src={story['media:thumbnail']._attributes.url}
        alt="story thumbnail"
        className="thumbnail"
      />
      <p>{story.description._text}</p>
      <p>
        <span>Topics:</span> {story['media:keywords']._text}
      </p>
      <a href={story.link._text} target="_blank" rel="noopener noreferrer">
        <button>Read It</button>
      </a>
    </div>
  );
}

export default Story;
