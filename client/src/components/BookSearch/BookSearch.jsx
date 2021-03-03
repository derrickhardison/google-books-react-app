import React, {  useState } from "react";
import API from "../../utils/API";

const BookSearch = () => {
  const [bookSearch, setBookSearch] = useState("");
  const [formObject, setFormObject] = useState({
    authors: "",
    description: "",
    image: "",
    infoLink: "",
    title: "",
  }, [])

  const [bookTitle, setBookTitle] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormObject({...formObject, [name]: value})
    //console.log(e.target.value)
    console.log(formObject.title)
    setBookTitle(e.target.value)
    
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    API.getBooks(bookSearch)
    .then(res => setBookSearch(res.data))
    .catch(err => console.log(err));
    // console.log("search books");
  };

  return (
    <div className="mb-5">
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="searchBook" className="form-label">
            Search for Book 
          </label>
          <input
            name="title"
            onChange={handleInputChange}
            value={formObject.title}
            type="text"
            className="form-control mb-3 "
            id="searchBook"
          />
          <button type="submit" className="btn btn-danger float-right">
            Search
          </button>
        </div>
      </form>
      <bookTitle bookTitle={bookTitle} />
    </div>
  );
};

export default BookSearch;