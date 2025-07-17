import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { App } from "./App";

describe("App", () => {
  it("affiche le lien Learn React", () => {
    render(<App />);
    const header = screen.getByText("Test technique Mobsuccess");
    expect(header).toBeInTheDocument();
  });
});
