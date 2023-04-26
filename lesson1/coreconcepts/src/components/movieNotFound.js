import React from "react";
import { useNavigate } from "react-router-dom";

export default function MovieNotFound() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="row text-center "
        style={{
          margin: 5,
          padding: 10,
        }}
      >
        <div className="col-sm-12 col-md-8  col-lg-8 text-light text-start">
          <div className="col-sm-12 col-md-10 col-lg-12">
            <button
              type="button"
              className="btn-close btn-close-white float-end"
              title="btn-close-dialog"
              style={{ right: 5, top: 5, color: "#ffffff" }}
              onClick={() => {
                navigate("/");
              }}
            ></button>
            <h1 className="text-danger">
              {"Movie not found"}&emsp;
              <span
                className="border border-light rounded-5 fs-3 fw-lighter"
                style={{ margin: "25px" }}
              >
                &nbsp;{":("}&nbsp;
              </span>
            </h1>
          </div>
          <br />
        </div>
      </div>
    </>
  );
}
