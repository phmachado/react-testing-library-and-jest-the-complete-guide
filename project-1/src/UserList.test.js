import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

test("it renders one row per user", () => {
  const users = [
    { name: "Alice", email: "alice@gmail.com" },
    { name: "John", email: "john@gmail.com" },
  ];

  // render the component
  render(<UserList users={users} />);

  // find all rows in the table
  // screen.logTestingPlaygroundURL();
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test("it renders the email and name of each user", () => {});
