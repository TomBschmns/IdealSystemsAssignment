import { useState, useEffect } from "react";

function Details({ handleBtnClose, selectedPost }) {
  const [comments, setComments] = useState([]);

  async function getComments() {
    const urlGET = `https://jsonplaceholder.typicode.com/posts/${selectedPost.id}/comments`;
    let resp = await fetch(urlGET);
    if (!resp.ok) {
      console.log("failed categories");
      return;
    }
    const data = await resp.json();
    console.log(selectedPost);
    console.log(data);
    setComments(data);
  }
  // get the intire post from listgroup as to not call it here again
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
