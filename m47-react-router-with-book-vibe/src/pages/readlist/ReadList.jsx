import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addLocalstorage";
import Book from "../book/Book";


const ReadList = () => {
  const [sort, setSort] = useState("");

  const [readList, setReadList] = useState([]);

  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType === "pages") {
      const sortedByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedByPage);
    //   console.log(sortedByPage);
    } else if (sortType === "ratings") {
      const sortedByRatings = [...readList].sort(
        (a, b) => a.ratings - b.ratings
      );
      setReadList(sortedByRatings);
    }
  };

  const data = useLoaderData();
  //   console.log(data);
  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertId = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) => convertId.includes(book.bookId));
    setReadList(myReadList);
  }, [data]);
  return (
    <div className="mx-52 max-md:mx-10 max-lg:mx-16 max-xl:mx-32">
      <details className="dropdown">
        <summary className="btn m-1">sort by : {sort ? sort : ""}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSort("pages")}>pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("ratings")}>rating</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList>
          <Tab>Read Book list</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel className="space-y-3">
          <h2 className="text-2xl font-bold">
            Book I Read : {readList.length}
          </h2>
          <div className="grid max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 max-2xl:grid-cols-4 grid-cols-5 gap-5">
            {readList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My wish list</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
