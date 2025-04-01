//Counter.test.jsx

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter.tsx";

describe("Counter Component", () => {
  it("should increment count when button is clicked", () => {
    // Render the component
    render(<Counter />);

    // Check initial count is 0
    expect(screen.getByText("Count: 0")).toBeInTheDocument();

    // Find the button and click it
    const button = screen.getByText("Click me");
    fireEvent.click(button);

    // Check if count was incremented to 1
    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });

  it("increments multiple times correctly", () => {
    render(<Counter />);

    const button = screen.getByText("Click me");

    // Click multiple times
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    // Check if count is now 3
    expect(screen.getByText("Count: 3")).toBeInTheDocument();
  });
});
