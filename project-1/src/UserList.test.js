import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

function renderComponent() {
  const users = [
    { name: "Alice", email: "alice@gmail.com" },
    { name: "John", email: "john@gmail.com" },
  ];

  render(<UserList users={users} />);
  return { users };
}

test("it renders one row per user", () => {
  renderComponent();

  // render the component
  // const { container } = render(<UserList users={users} />);

  // find all rows in the table
  // screen.logTestingPlaygroundURL();
  // eslint-disable-next-line
  // const rows = container.querySelectorAll("tbody tr");
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test("it renders the email and name of each user", () => {
  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
