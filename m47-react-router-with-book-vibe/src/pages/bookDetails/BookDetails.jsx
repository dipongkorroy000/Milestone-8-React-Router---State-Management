import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToLocalstorage } from "../../utility/addLocalstorage";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const clickMarkAsRead = (id) => {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });

    addToLocalstorage(id);
  };
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const bookDetails = useLoaderData();
  const book = bookDetails.find((book) => book.bookId === id);
  const { review, image } = book;

  return (
    <div className="p-10 w-96">
      <img className="w-full mx-auto mb-5" src={image} alt="" />
      <p>Review : {review}</p>
      <div className="flex justify-between mt-5">
        <button onClick={() => clickMarkAsRead(id)} className="btn btn-primary">
          Mark as Read
        </button>
        <button className="btn btn-secondary">Add to WishList</button>
      </div>
    </div>
  );
};

export default BookDetails;
