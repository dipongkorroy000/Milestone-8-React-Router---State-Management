import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  //   const books = use(booksPromise);
  // console.log(book);
  const {
    bookId,
    bookName,
    image,
    rating,
    category,
    yearOfPublishing,
    publisher,
    tags,
    totalPages,
  } = book;
  // console.log(id)
  return (
    <div className="card border border-blue-500 p-3">
      <figure className="w-2/5 mx-auto">
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div>
          {tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
        <h2 className="">
          <Link to={`/bookDetails/${bookId}`}>{bookName}</Link>
          <span className="bg-red-500 py-1 px-2 rounded-xl text-sm ml-3">
            {yearOfPublishing}
          </span>
        </h2>
        <p>By : {publisher}</p>
        <p>Pages : {totalPages}</p>
        <div className="border-b-2 border-dashed my-2 border-gray-400"></div>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">{rating}</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
