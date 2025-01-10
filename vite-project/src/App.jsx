import "./App.css";
import ListGroup from "./components/ListGroup";
import Details from "./components/Details";
import { useState } from "react";

function App() {
  const [showComments, setShowComments] = useState(false);
  const [selectedComment, setSelectedComment] = useState("");

  const handleViewComments = (id) => {
    setSelectedComment(id);
    setShowComments(true);
  };
  const handleBtnClose = () => {
    setShowComments(false);
  };

  return (
    <div>
      {showComments ? (
        <Details handleBtnClose={handleBtnClose} />
      ) : (
        <ListGroup handleViewComments={handleViewComments} />
      )}
    </div>
  );
}

export default App;
