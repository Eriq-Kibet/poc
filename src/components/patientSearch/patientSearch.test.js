import React from "react";
import { render, screen } from "@testing-library/react";
import PatientSearch from "./patientSearch.component";

test("Search patient text exist", () => {
  render(<PatientSearch />);
  expect(screen.getByText("Search Patient")).toBeInTheDocument();
});
