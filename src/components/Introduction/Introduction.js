import React from "react";

function Introduction(id) {
  console.log("id", id);
  return (
    <div className="">
      <article>
        <header className="mb-4 ">
          <h1 className="fw-bolder mb-1">Xin chào, Minh Nguyệt!</h1>
          <div className="text-muted fst-italic mb-2">January 1, 2021</div>
        </header>
        <figure className="mb-4"></figure>
        <section className="mb-5">
          <p className="fs-5 mb-4">
            Science is an enterprise that should be cherished as an activity of
            the free human mind. Because it transforms who we are, how we live,
            and it gives us an understanding of our place in the universe.
          </p>
        </section>
      </article>
    </div>
  );
}

export default Introduction;
