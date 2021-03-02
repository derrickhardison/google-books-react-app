import React from "react";

const SavedBooks = () => {
  return (
    <div className="mt-5">
      <div className="card">
        <div className="card-body">
          <div id="buttons" className="float-right">
            <button className="btn btn-outline-primary mr-3">VIEW</button>
            <button
              className="btn btn-outline-danger"
              // onClick={() => deleteBook(book._id)}
            >
              DELETE
            </button>
          </div>
          <h5 className="card-title">Title</h5>

          <p className="card-text">Author</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-5">
                    <img
                      className="full-img"
                      src="https://picsum.photos/200/200?grayscale"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto quas pariatur, repudiandae, possimus animi
                        natus autem eius libero voluptate velit placeat illum
                        eum atque reprehenderit sit mollitia, quidem
                        consequuntur! Animi consequatur a laborum eligendi
                        repellendus ut suscipit iure eaque. Iste molestiae
                        facere tenetur ducimus incidunt vero iusto rerum dolore!
                        Nulla ea magnam molestiae, aliquid obcaecati unde, quos
                        odio voluptate ratione sunt nobis consectetur, in esse
                        et enim autem sint error eius corporis excepturi quaerat
                        deserunt! Veritatis dolorum quod vitae! Quod consectetur
                        quo numquam iste ducimus? Reprehenderit iste pariatur
                        temporibus dolor est voluptate, sed repellendus!
                        Blanditiis expedita culpa cumque magni impedit molestias
                        explicabo exercitationem? Consequatur unde perferendis,
                        accusantium distinctio recusandae ratione numquam aut
                        facere iusto officiis pariatur at corporis soluta
                        voluptatum, sit reiciendis? Inventore dolor voluptate
                        accusantium, nostrum tenetur a, quasi, dolore itaque
                        facilis eveniet quia illo beatae recusandae
                        reprehenderit? Sunt eligendi eius ipsa unde blanditiis
                        laboriosam vitae eaque perferendis fugit.
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

export default SavedBooks;
