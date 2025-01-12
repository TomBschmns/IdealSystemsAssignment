import { useState, useEffect } from "react";
import "./Details.css";

function Details({ handleBtnClose, selectedPost }) {
  // "handleBtnClose" is used when the "close" butten is pressed en will send a signal to "App" to close "Details"
  // "selectedPost" gives us all the information about the post the user wants to know more about, the post id is used to get all the relevant comments

  // Define variables
  const [comments, setComments] = useState([]);
  console.log(selectedPost);

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
    <div className="wrapper_Details">
      <button
        id="btnClose"
        className="btnClose"
        onClick={() => handleBtnClose()}
      >
        Close
      </button>
      <div className="wrapper_comments">
        <h1>{selectedPost.title}</h1>
        <p>{selectedPost.body}</p>
        <h2>Comments</h2>
        <ul id="commentList" className="commentList">
          {comments.map((item) => (
            <li key={item.id} className="commentItem">
              {item.body}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Details;
