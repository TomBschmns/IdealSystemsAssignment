import { useState, useEffect } from "react";

function Details({ handleBtnClose, selectedPost }) {
  // "handleBtnClose" is used when the "close" butten is pressed en will send a signal to "App" to close "Details"
  // "selectedPost" gives us all the information about the post the user wants to know more about, the post id is used to get all the relevant comments

  // Define variables
  const [comments, setComments] = useState([]);

  // Async function in order to get the comments of "selectedPost", is set into the comments const
  async function getComments() {
    const urlGET = `https://jsonplaceholder.typicode.com/posts/${selectedPost.id}/comments`;
    let resp = await fetch(urlGET);
    if (!resp.ok) {
      console.log("failed categories");
      return;
    }
    const data = await resp.json();
    setComments(data);
  }

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div>
      <button
        id="btnClose"
        className="btnClose"
        onClick={() => handleBtnClose()}
      >
        Close
      </button>
      <h1>{selectedPost.title}</h1>
      <p>{selectedPost.body}</p>
      <h2>Comments</h2>
      <ul id="commentList" className="commentList">
        {comments.map((item) => (
          <li key={item.id}>{item.body}</li>
        ))}
      </ul>
    </div>
  );
}

export default Details;
