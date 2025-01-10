import { useState, useEffect } from "react";

function Details({ handleBtnClose, selectedPost }) {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  async function getPost() {
    const urlGET = "https://jsonplaceholder.typicode.com/posts";
    let resp = await fetch(urlGET);
    if (!resp.ok) {
      console.log("failed categories");
      return;
    }
    const data = await resp.json();
    console.log(data[selectedPost - 1]);
    setPost(data[selectedPost - 1]);
  }
  // get the intire post from listgroup as to not call it here again
  useEffect(() => {
    getPost();
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
    </div>
  );
}

export default Details;
