import React from "react";
import "./BookResult.css";

const BookResult = ({ book, saveBook }) => {
  console.log(book);

  return (
    <div className="mt-5">
      

      <div className="card">
        <div className="card-body">
          <div id="buttons" className="float-right">
            <a
              href={book.volumeInfo.infoLink}
              className="btn btn-outline-primary mr-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW
            </a>
            <button
              className="btn btn-outline-success"
              onClick={() => saveBook(book.volumeInfo)}
            >
              SAVE
            </button>
          </div>
          <h5 className="card-title">{book.volumeInfo.title}</h5>

          <p className="card-text">{book.volumeInfo.authors}</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-5">
                    <img
                      className="full-img"
                      src={
                        book?.volumeInfo?.imageLinks?.thumbnail ||
                        "https://placehold.it/200x200"
                      }
                      alt="..."
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <p className="card-text">
                        {book.volumeInfo.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookResult;
