import { useEffect, useState } from "react";

function ListGroup({ handleViewComments }) {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const re = new RegExp(String.raw`${search}`, "g");

  async function getList() {
    const urlGET = "https://jsonplaceholder.typicode.com/posts";
    let resp = await fetch(urlGET);
    if (!resp.ok) {
      console.log("failed categories");
      return;
    }
    const data = await resp.json();
    setList(data);
    console.log("test");
  }

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm.toLowerCase());
    setFilteredList(list.filter((l) => re.exec(l.title)));
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <input
        type="search"
        id="searchName"
        className="searchName"
        name="searchName"
        placeholder="search post titles"
        value={search}
        onChange={handleInputChange}
      />
      <div id="wrapperList" className="wrapperList">
        <ul id="list" className="list">
          {search == "" ? (
            <>
              {list.map((item) => (
                <li key={item.id}>
                  {item.title}
                  <button
                    id={item.id}
                    className="buttenView"
                    onClick={() => handleViewComments(item.id)}
                  >
                    View
                  </button>
                </li>
              ))}
            </>
          ) : (
            <>
              {filteredList.map((item) => (
                <li key={item.id}>
                  {item.title}
                  <button
                    id={item.id}
                    className="buttenView"
                    onClick={() => handleViewComments(item.id)}
                  >
                    View
                  </button>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ListGroup;
