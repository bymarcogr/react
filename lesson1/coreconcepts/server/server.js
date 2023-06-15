import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";
import cors from "cors";

import { getMovieList } from "../src/services/api";

const PORT = 8000;

const app = express();

app.use(cors());

app.get("/*", (req, res, next) => {
  console.log(`Request URL = ${req.url}`);
  if (req.url !== "/") {
    return next();
  }

  getMovieList("http://localhost:4000/movies", {
    sortBy: "title",
    sortOrder: "asc",
    limit: 20,
  })
    .then((movies) => {
      const reactApp = ReactDOMServer.renderToString(
        React.createElement(App, { movies: movies })
      );

      const indexFile = path.resolve("build/index.html");
      fs.readFile(indexFile, "utf8", (err, data) => {
        if (err) {
          const errMsg = `There is an error: ${err}`;
          console.error(errMsg);
          return res.status(500).send(errMsg);
        }

        return res.send(
          data.replace(
            '<div id="root"></div>',
            `<div id="root">${reactApp}</div>`
          )
        );
      });
      // const reactApp = ReactDOMServer.renderToString(
      //   React.createElement(<App serverData={movies}></App>)
      // );
    })
    .catch((error) => {
      console.log(error);
    });
});

app.use(express.static(path.resolve(__dirname, "../build")));

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});
