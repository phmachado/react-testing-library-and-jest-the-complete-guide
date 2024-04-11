import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows to inputs and a button", () => {
  // render the component
  render(<UserForm />);

  // manipulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // assert that the component doing what we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when the form is submitted", async () => {
  const mock = jest.fn();

  // try to render my component
  render(<UserForm onUserAdd={mock} />);

  // find the 2 inputs
  const name = screen.getByRole("textbox", { name: /name/i });
  const email = screen.getByRole("textbox", { name: /email/i });

  // simulate typing name
  await user.click(name);
  await user.keyboard("John Doe");

  // simulate typing email
  await user.click(email);
  await user.keyboard("john.doe@gmail.com");

  // find the button
  const button = screen.getByRole("button");

  // simulate clicking the button
  await user.click(button);

  // assert that the function onUserAdd was called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: "John Doe",
    email: "john.doe@gmail.com",
  });
});

test("it should clear the inputs on form submit", async () => {
  render(<UserForm onUserAdd={() => {}} />);

  const name = screen.getByRole("textbox", { name: /name/i });
  const email = screen.getByRole("textbox", { name: /email/i });

  await user.click(name);
  await user.keyboard("John Doe");

  await user.click(email);
  await user.keyboard("john.doe@gmail.com");

  const button = screen.getByRole("button");

  await user.click(button);

  expect(name).toHaveValue("");
  expect(email).toHaveValue("");
});
