import { useEffect, useState } from "react";

function ListGroup({ handleViewComments }) {
  // "hanleViewComment" is used when the "view" button is clicked. This will pass al the data of the post onto the "Details" component

  // Define variables
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  let re = new RegExp(String.raw`${search}`, "g");

  // Async function to get the post list, is set into the "list" const
  async function getList() {
    const urlGET = "https://jsonplaceholder.typicode.com/posts";
    let resp = await fetch(urlGET);
    if (!resp.ok) {
      console.log("failed to get list");
      return;
    }
    const data = await resp.json();
    setList(data);
  }

  // Event listner that wait on change in the taskbar, will filter the list into a filtered list depending on strings match with the users input
  const handleInputChange = (e) => {
    // Get the value
    const searchTerm = e.target.value;
    // Set all to lowercase for better results
    setSearch(searchTerm.toLowerCase());
    // Filter the list using regular expression
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
                    onClick={() => handleViewComments(item)}
                  >
                    View
                  </button>
                </li>
              ))}
            </>
          ) : (
            <>
              {filteredList != "" ? (
                <>
                  {" "}
                  {filteredList.map((item) => (
                    <li key={item.id}>
                      {item.title}
                      <button
                        id={item.id}
                        className="buttenView"
                        onClick={() => handleViewComments(item)}
                      >
                        View
                      </button>
                    </li>
                  ))}
                </>
              ) : (
                <>
                  <h1>No posts found</h1>
                </>
              )}
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ListGroup;
