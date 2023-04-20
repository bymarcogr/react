import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ShowDemoDialog from "../../../components/showDemoDialog";

describe("ShowDemoDialog", () => {
  test("When prop is Open is true, Should display dialog", () => {
    render(<ShowDemoDialog isOpen={true} onClose={() => {}} />);
    expect(screen.getByText(/GENERIC EMAIL DIALOG/i)).toBeInTheDocument();
  });

  test("When prop is Open is false, Should not display dialog", () => {
    render(<ShowDemoDialog isOpen={false} onClose={() => {}} />);
    const expectedMovie = screen.queryByText(/GENERIC EMAIL DIALOG/i);
    expect(expectedMovie).not.toBeInTheDocument();
  });

  test("When prop ais Open is true and Click, Should call handleOnClose", () => {
    let calledOnClose = false;
    const handleOnClose = () => (calledOnClose = true);

    render(<ShowDemoDialog isOpen={true} onClose={handleOnClose} />);

    fireEvent.click(screen.getByTitle("btn-close-dialog"));

    expect(calledOnClose).toBe(true);
  });
});
