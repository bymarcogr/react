import React, { useState } from "react";
import ShowDemoDialog from "./showDemoDialog";
import AddMovieDialog from "./addMovieDialog";

export default function FourthLessonApp() {
  const [isAddMovieOpen, setIsAddMovieOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const handleOnSubmit = (e) => {
    const entries = [...new FormData(e.target).entries()];
    let newGenres = [];
    entries.forEach((i) => {
      if (i[0] === "genre") {
        newGenres.push(i[1]);
      }
    });

    let formObject = Object.fromEntries(entries);
    formObject.genre = [...newGenres];
    console.log(formObject);
    e.preventDefault();
  };

  return (
    <div>
      <h1 className="text-success">Fourth Lesson</h1>
      <div className="container-fluid">
        <button
          type="button"
          className="btn btn-primary"
          title="btn-show-dialog"
          onClick={() => setIsDemoOpen(true)}
        >
          Show Generic Dialog
        </button>
        {isDemoOpen && (
          <ShowDemoDialog isOpen={true} onClose={() => setIsDemoOpen(false)} />
        )}
        <br />
        <br />
        <button
          type="button"
          className="btn btn-danger"
          title="btn-add-movie"
          onClick={() => setIsAddMovieOpen(true)}
        >
          Add Movie
        </button>
        {isAddMovieOpen && (
          <AddMovieDialog
            isOpen={true}
            onClose={() => setIsAddMovieOpen(false)}
            onSubmit={handleOnSubmit}
          />
        )}
      </div>
    </div>
  );
}
