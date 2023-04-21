import React from "react";

export default function SortMovies({ onSort, containerClassName }) {
  return (
    <div className={`row text-muted ${containerClassName ?? ""}`}>
      <label className="col-4 end-0 lead text-uppercase fs-5 light ">
        Sort By{" "}
      </label>
      <div className="col-8 sort-select ">
        <select
          id="sort-by-select-id"
          name="sort-by-select-id"
          title="sort-by-select"
          defaultValue="Title"
          onChange={(e) => onSort(e.target.value)}
        >
          <option className="text-uppercase">Release Date</option>
          <option className="text-uppercase">Title</option>
        </select>
      </div>
    </div>
  );
}
