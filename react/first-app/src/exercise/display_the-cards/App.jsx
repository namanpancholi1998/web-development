import React, { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="app">
      <h1>Display The Cards From API </h1>
      {posts.map((post) => {
        return (
          <div key={post.id} className="container">
            <div className="post">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;

/*
    Task:- 
        You have to use an api and display the data in the form of a card under a container. All the data points returned by the API should be converted to a card.
        Use this API: https//:jsonplaceholder.typicode.com/posts

        Hint:- create a state for data which will be fetched using the Json Placeholder API
        Inside useEffect, use fetch to populate that state and then use map to render the cards from that state.
*/
