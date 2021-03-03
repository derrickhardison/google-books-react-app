import React, { useEffect, useState } from "react";
import API from "../utils/API";
import SavedBooks from "../components/SavedBooks/SavedBooks";
import axios from "axios";

const Saved = () => {
  // Deletes a book from the database with a given id, then reloads books from the db
  // function deleteBook(id) {
  //   API.deleteBook(id)
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // }

  const [savedBooks, setSavedBooks] = useState([]);
  useEffect(() => {
    axios.get("/api/books").then((response) => {
      console.log("Here :", response.data);
      setSavedBooks(response.data);
      console.log("Line 20: ", setSavedBooks);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Saved Books</h1>
          {savedBooks.map((bookSaved) => (
            <div key={bookSaved.id}>
            <SavedBooks />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Saved;
