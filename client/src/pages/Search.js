import React, { useEffect, useState } from "react";
import BookSearch from "../components/BookSearch/BookSearch";
import BookResult from "../components/BookResult/BookResult";
import axios from "axios";


function BookInfo(book) {
  return (
    // <BookSearch />
    console.log()
  );
}

const Search = () => {
  const [books, setBooks] = useState([]);

  function SearchBooks() {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:&key=AIzaSyAfrpQXZXcliTIXdDGXtxQAW6Pi5iGb42w`
      )
      .then((response) => {
        console.log(response.data.items);
        setBooks(response.data.items);
      });
  }

  function saveBook(book) {
    axios
      .post("/api/books", book)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    SearchBooks();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="bg-light p-5">
            <h1>Book Search</h1>
            <BookSearch />
          </div>
          <h1 className="mt-3">Results</h1>
          {books.map((book) => (
            <BookResult book={book} key={book.id} saveBook={saveBook} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;