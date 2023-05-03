import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link, Routes, Route, Outlet } from "react-router-dom";
import FirstLessonApp from "./firstLessonApp";
import ThirdLessonApp from "./thirdLessonApp";
import FourthLessonApp from "./fourthLessonApp";
import FifthLessonApp from "./fifthLessonApp";
import SixthLessonApp from "./sixthLessonApp";

export default function LessonMenu() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>ReactJS EPAM Mentoring</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="1">
                Core Concepts
              </Link>
              <Link className="nav-link" to="3">
                Components
              </Link>
              <Link className="nav-link" to="4">
                Advanced Components
              </Link>
              <Link className="nav-link" to="5">
                Hooks
              </Link>
              <Link
                className="nav-link"
                to="6?search=Star+Wars&searchBy=title&sortBy=release_date"
              >
                Route
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Outlet />
      </div>
      <Routes>
        <Route path="1" element={<FirstLessonApp />} />
        <Route path="3" element={<ThirdLessonApp />} />
        <Route path="4" element={<FourthLessonApp />} />
        <Route path="5" element={<FifthLessonApp />} />
        <Route path="6" element={<SixthLessonApp />} />
      </Routes>
    </>
  );
}
