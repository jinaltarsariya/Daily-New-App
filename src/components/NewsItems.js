import React from "react";
import moment from "moment/moment";

export default function NewsItems({
  title,
  dis,
  img,
  url,
  author,
  publishedAt,
  source,
  mode,
}) {
  return (
    <div>
      <div className="card">
        <span
          className={`badge bg-${mode === "light" ? "danger" : "dark"} fs-6`}
        >
          {source.name}
        </span>
        <img src={img} className="card-img-top" alt="..." />
        <div
          className="card-body"
          style={{ backgroundColor: mode === "light" ? "#002B5B" : "#DDE6ED" }}
        >
          <h5
            className={`card-text pb-2 text-${
              mode === "light" ? "light" : "dark"
            }`}
            style={{
              textDecoration: "underLine",
            }}
          >
            Author :- {author}
          </h5>
          <h5
            className={`card-text pb-2 text-${
              mode === "light" ? "light" : "dark"
            }`}
          >
            Time :- {moment(publishedAt).format("DD-MM-YYYY hh:mm:ss a")}
          </h5>
          <h5
            className={`card-title text-${mode === "light" ? "light" : "dark"}`}
          >
            {title.slice(0, 80)}...
          </h5>
          <p
            className={`fst-normal  text-capitalize text-${
              mode === "light" ? "light" : "dark"
            }`}
          >
            {dis.slice(0, 150)}...
          </p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className={`btn btn-sm btn-${
              mode === "light" ? "danger" : "dark"
            } text-center`}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
