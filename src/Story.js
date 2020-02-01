import React from 'react';

function Story(props) {
    console.log(props.latestStory.rss.channel.item[0]);
  let story = props.latestStory.rss.channel.item[0];
  let channel = props.latestStory.rss.channel;
  let date = story.pubDate._text
    .split(' ')
    .splice(0, 4)
    .join(' ');
  return (
    <div>
      <h2>Latest {channel.title._text}</h2>
      <h3>{story.title._text}</h3>
      <span>by: {story['dc:creator']._text}</span>
      <span>{date}</span>
      <img
        src={story['media:thumbnail']._attributes.url}
        alt="story thumbnail"
        className="thumbnail"
      />
      <p>{story.description._text}</p>
      <p>Topics: {story['media:keywords']._text}</p>
      <a href={story.link._text} target="_blank" rel="noopener noreferrer">
        <button>Read It</button>
      </a>
    </div>
  );
}

export default Story;
