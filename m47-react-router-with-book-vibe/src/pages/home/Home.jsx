import React from "react";
import Banner from "../../components/banner/Banner";
import Books from "../books/Books";
import { useLoaderData } from "react-router";

const Home = () => {
  const books = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="mx-40">
        <Books books={books}></Books>
      </div>
    </div>
  );
};

export default Home;
