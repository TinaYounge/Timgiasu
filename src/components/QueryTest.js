import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";

export default function QueryParamsExample() {
  return (
    <Router>
      <QueryParamsDemo />
    </Router>
  );
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function QueryParamsDemo() {
  let query = useQuery();
  // const [page, setPage] = useState(1);
  return (
    <div>
      <div>
        <h2>AllTeacherPages</h2>
        <ul>
          <li>
            <Link to="/AllTeacherPage?page=yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/AllTeacherPage?page=modus-create">Modus Create</Link>
          </li>
        </ul>

        <Child page={query.get("page")} />
      </div>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item onClick={() => {}}>
          {1}
          {/* <Link to="/AllTeacherPage?page=1">1</Link> */}
        </Pagination.Item>
        <Pagination.Item>
          <Link to="/AllTeacherPage?page=2">2</Link>
        </Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
}

function Child({ page }) {
  return (
    <div>
      {page ? (
        <h3>
          The <code>page</code> in the query string is &quot;{page}
          &quot;
        </h3>
      ) : (
        <h3>There is no page in the query string</h3>
      )}
    </div>
  );
}

function Child2({ page }) {
  return (
    <div>
      {page ? (
        <h3>
          The <code>page</code> in the query string is &quot;{page}
          &quot;
        </h3>
      ) : (
        <h3>There is no page in the query string</h3>
      )}
    </div>
  );
}
