import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import Body from "./components/Body";
import Pagination from "./components/pagination";

const App = () => {
  const [listData, setListData] = useState([]);
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [bodyData, setBodyData] = useState("");
  const [dataSource, setDataSource] = useState([]);
  const [filterChip, setFilterChip] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(50);
  // const currentPosts = listData.slice((currentPage-1)*postsPerPage,currentPage*postsPerPage);
  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = () => {
    fetch("https://6366339879b0914b75cba9c2.mockapi.io/api/email")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        setListData(
          data.map((item) => ({ ...item, read: false, favorite: false }))
        );
        setDataSource(
          data.map((item) => ({ ...item, read: false, favorite: false }))
        );
      })
      .catch((err) => console.error(err));
  };
  // console.log(listData)
  const fetchBody = (id, emailData) => {
    fetch(`https://6366339879b0914b75cba9c2.mockapi.io/api/email/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBodyData({ ...data, ...emailData });
        setIsEmailOpen(true);
        setListData((prevState) =>
          prevState.map((item) => {
            if (item.id === id) {
              return { ...item, read: true };
            }
            return item;
          })
        );
        setDataSource((prevState) =>
          prevState.map((item) => {
            if (item.id === id) {
              return { ...item, read: true };
            }
            return item;
          })
        );
      })
      .catch((err) => console.error(err));
  };

  const handleOpenEmail = (id, emailData) => {
    fetchBody(id, emailData);
  };

  const markAsFavorite = (id) => {
    setListData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, favorite: !item.favorite };
        }
        return item;
      })
    );
    setDataSource((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, favorite: !item.favorite };
        }
        return item;
      })
    );

    setBodyData((prevState) => ({
      ...prevState,
      favorite: !prevState.favorite,
    }));
  };

  const filterEmails = (type) => {
    let emailList = dataSource;
    if (type === "unread") {
      emailList = dataSource.filter((item) => !item.read);
    } else if (type === "read") {
      emailList = dataSource.filter((item) => item.read);
    } else if (type === "favorites") {
      emailList = dataSource.filter((item) => item.favorite);
    } else {
      emailList = dataSource;
    }
    setFilterChip(type);
    setListData(emailList);
    setIsEmailOpen(false);
  };

  const getDate = () => {
    let date = new Date();
    const day = date.toLocaleDateString().split("/")[1];
    const mmyyyy = date.toLocaleDateString("en-US", {
      month: "numeric",
      year: "numeric",
    });
    const time = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    const dateFormat = day + "/" + mmyyyy + " " + time;
    return dateFormat;
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = listData.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <div className="nav">
        <ul>
          Filter By:
          <li
            className={filterChip === "all" ? "activeChip" : ""}
            onClick={() => filterEmails("all")}
          >
            All Emails
          </li>
          <li
            className={filterChip === "unread" ? "activeChip" : ""}
            onClick={() => filterEmails("unread")}
          >
            Unread
          </li>
          <li
            className={filterChip === "read" ? "activeChip" : ""}
            onClick={() => filterEmails("read")}
          >
            Read
          </li>
          <li
            className={filterChip === "favorites" ? "activeChip" : ""}
            onClick={() => filterEmails("favorites")}
          >
            Favorites
          </li>
        </ul>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        {/* email list */}

        <List
          listData={currentPosts}
          handleOpenEmail={handleOpenEmail}
          date={getDate()}
        />

        {isEmailOpen && (
          // email body
          <Body
            emailData={bodyData}
            markAsFavorite={markAsFavorite}
            date={getDate()}
          />
        )}
      
      </div>
      <div style={{display:"flex",justifyContent:"center",marginTop:"15px"}}>
      <Pagination
          postsPerPage={postsPerPage}
          totalPosts={listData.length}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default App;
