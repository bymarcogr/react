import { render, screen } from "@testing-library/react";
import FourthLessonApp from "../../components/fourthLessonApp";

describe("FourthLessonApp", () => {
  test("renders title of 4th Component", () => {
    render(<FourthLessonApp />);
    expect(screen.getByText(/Fourth Lesson/i)).toBeInTheDocument();
  });

  test("renders two dialog Buttons", () => {
    render(<FourthLessonApp />);
    expect(screen.getByTitle("btn-show-dialog")).toBeInTheDocument();
    expect(screen.getByTitle("btn-add-movie")).toBeInTheDocument();
  });
});
