import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";

function App() {
  const {name, image, about, posts} = blogData
  console.log(posts)
  return (
    <div className="App">
      <Header dataName={name}/>
      <About dataImage={image} dataAbout={about}/>
      <ArticleList dataPosts={posts}/>
    </div>
  );
}

export default App;
