import { useEffect, useState } from "react";

function ListGroup() {
  const [list, setList] = useState([]);

  async function getList() {
    const urlGET = "https://jsonplaceholder.typicode.com/posts";
    let resp = await fetch(urlGET);
    if (!resp.ok) {
      console.log("failed categories");
      return;
    }
    const data = await resp.json();
    setList(data);
  }

  useEffect(() => {
    getList();
  }, []);
  return (
    <div>
      <input
        type="text"
        id="searchName"
        className="searchName"
        name="searchName"
        placeholder="search post titles"
      />
      <div id="wrapperList" className="wrapperList">
        <ul id="list" className="list">
          {list.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListGroup;
