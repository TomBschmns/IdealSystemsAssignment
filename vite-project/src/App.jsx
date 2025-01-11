import "./App.css";
import ListGroup from "./components/ListGroup";
import Details from "./components/Details";
import { useState } from "react";

function App() {
  // Define variables
  const [showComments, setShowComments] = useState(false);
  const [selectedPost, setSelectedPost] = useState("");

  // Sets the selected post and changes the view from the posts to the comments
  const handleViewComments = (post) => {
    setSelectedPost(post);
    setShowComments(true);
  };

  // Changes the view from the comments to the posts
  const handleBtnClose = () => {
    setShowComments(false);
  };

  return (
    <div>
      {showComments ? (
        <Details handleBtnClose={handleBtnClose} selectedPost={selectedPost} />
      ) : (
        <ListGroup handleViewComments={handleViewComments} />
      )}
    </div>
  );
}

export default App;
