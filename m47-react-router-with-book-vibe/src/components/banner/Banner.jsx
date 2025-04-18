import React from "react";
import bookImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="flex justify-around items-center w-full bg-amber-50 py-10">
      <div>
        <h1 className="text-black text-3xl font-bold">
          Books to freshen up <br /> your bookshelf
        </h1>
        <button className="btn btn-primary mt-5">View The List</button>
      </div>
      <div>
        <img className="rounded-2xl" src={bookImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
