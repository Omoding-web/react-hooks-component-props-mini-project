import React from "react";
//To import the blog data  from the data file
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

//Initialize an empty array to store the posts
console.log(blogData);
const posts = [];


function App() {
  //To render the App component
  return (
    <div className="App">
      {/*To render the Header, About,and ArticleList with the name, image, about, posts prop set to the blog(name,image, about,posts)*/}
      <Header name={blogData.name}/>
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
  </div>
  );
}

export default App;
