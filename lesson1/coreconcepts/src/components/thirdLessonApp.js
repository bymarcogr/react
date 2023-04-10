import React from "react";
import MoviesContainer from "./moviesContainer";
import { MoviesListDefault } from "../models/moviesListDefault";

export default function ThirdLessonApp() {
  return (
    <>
      <h1 className="text-success">Third Lesson</h1>
      <span>
        <MoviesContainer movies={MoviesListDefault}></MoviesContainer>
      </span>
    </>
  );
}
