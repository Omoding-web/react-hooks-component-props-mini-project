import React from "react";

//To define the emojiArray with two emojis
const emojiArray = ["☕️", "🍱"];

//Defining the Article component that takes in blogData as props
function Article({ title, date, preview }) {
  const minutesToRead = Math.ceil(preview.length / 200);
  const emoji = minutesToRead < 3 ? emojiArray[0] : emojiArray[1];
  const emojiCount = Math.ceil(minutesToRead / (emoji === emojiArray[0] ? 5 : 10));
  const emojis = Array(emojiCount).fill(emoji).join("");

  //Rendering the Article compent with the title, date, and preview
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {/*To display the date or "January 1, 1970" if the date is not provided, emojis and minutes */}
        {date || "January 1, 1970"} - {emojis} {minutesToRead} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;

