import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./login.component";

describe("Checking Login", () => {
  render(<Login />);
  expect(screen.getByLabelText("Username")).toBeInTheDocument();
  expect(screen.getByLabelText("Password")).toBeInTheDocument();
  expect(screen.getByAltText("Logo")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Login" })).toBeDisabled();
});
describe("<Login/>", () => {
  it("renders without crashing", () => {
    render(<Login />);
  });
  it("checks if button is disabled", () => {
    render(<Login />);
  });
  const setup = () => {
    const utils = render(<Login />);
  
    const input = utils.getByLabelText("Username");
    return {
      input,
      ...utils,
    };
  };
  test("Its gets the username", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { username: "testuser" } });
    expect(input.username).toBe("testuser");
  });
});
