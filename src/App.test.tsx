
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";


describe("App", () => {
  it("affiche le lien Learn React", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
