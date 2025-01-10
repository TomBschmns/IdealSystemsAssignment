import "./App.css";
import ListGroup from "./components/ListGroup";
import Details from "./components/Details";
import { useState } from "react";

function App() {
  const [showComments, setShowComments] = useState(false);
  const [selectedComment, setSelectedComment] = useState("");

  const handleViewComments = (id) => {
    setShowComments(true);
  };
  const handleBtnClose = () => {
    setShowComments(false);
  };

  return <div>{showComments ? <Details /> : <ListGroup />}</div>;
}

export default App;
