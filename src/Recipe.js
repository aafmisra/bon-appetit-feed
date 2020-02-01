import React from 'react';

function Recipe(props) {
  let recipe = props.latestRecipe.rss.channel.item[0];
  let channel = props.latestRecipe.rss.channel;
  let date = recipe.pubDate._text
    .split(' ')
    .splice(0, 4)
    .join(' ');
  return (
    <div>
      <h2>{channel.title._text}</h2>
      <h3>{recipe.title._text}</h3>
      <span>by: {recipe['dc:creator']._text}</span>
      <span>{date}</span>
      <img
        src={recipe['media:thumbnail']._attributes.url}
        alt="recipe thumbnail"
        className="thumbnail"
      />
      <p>{recipe.description._text}</p>
      <p>Key Ingredients: {recipe['media:keywords']._text}</p>
      <a href={recipe.link._text} target="_blank" rel="noopener noreferrer">
        <button>Make it</button>
      </a>
    </div>
  );
}

export default Recipe;
