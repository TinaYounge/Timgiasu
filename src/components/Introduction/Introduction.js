import React from "react";

function Introduction({ singleTeacherInfo }) {
  return (
    <div className="">
      <article>
        <header className="mb-4 ">
          <h1 className="fw-bolder mb-1">{singleTeacherInfo.fullname}!</h1>
          <div className="text-muted fst-italic mb-2">
            {singleTeacherInfo.createdAt}
          </div>
        </header>
        <figure className="mb-4"></figure>
        <section className="mb-5">
          <p className="fs-5 mb-4">{singleTeacherInfo.desc}</p>
        </section>
      </article>
    </div>
  );
}

export default Introduction;
