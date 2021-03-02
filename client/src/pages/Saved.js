import React from "react";
import API from "../utils/API";
import SavedBooks from "../components/SavedBooks/SavedBooks";

const Saved = () => {
  // Deletes a book from the database with a given id, then reloads books from the db
  // function deleteBook(id) {
  //   API.deleteBook(id)
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Saved Books</h1>
          <SavedBooks />
        </div>
      </div>
    </div>
  );
};

export default Saved;