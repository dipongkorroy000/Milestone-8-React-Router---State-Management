import React, { Suspense } from "react";
import Book from "../book/Book";

const Books = ({ books }) => {
  //   const booksPromise = fetch("booksData.json").then((res) => res.json());
  return (
    <div>
      <h1 className="text-3xl text-center p-6 font-semibold">Books</h1>
      <div className="grid grid-cols-3 gap-3 border border-blue-500 p-3 rounded-xl">
        <Suspense fallback={<span>waiting for message...</span>}>
          {books.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Books;
