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
    const input2 = utils.getByLabelText("Password");
    return {
      input,
      input2,
      ...utils,
    };
  };
  test("Its gets the username", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { username: "testuser" } });
    expect(input.username).toBe("testuser");
  });
  test('Checks Password', () => {
    const { input2 } = setup();
    fireEvent.change(input2, {target: {password: "pass"}});
    expect(input2.password).toBe("pass")
  })
});


