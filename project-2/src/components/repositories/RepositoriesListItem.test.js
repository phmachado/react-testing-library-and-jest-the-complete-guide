import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RepositoriesListItem from "./RepositoriesListItem";

function renderComponent() {
  const repository = {
    full_name: "facebook/react",
    language: "JavaScript",
    description:
      "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
    owner: "facebook",
    name: "react",
    html_url:
      "https://github.com/phmachado/react-testing-library-and-jest-the-complete-guide",
  };

  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );
}

test("it renders component and shows a link to the repository github page", async () => {
  renderComponent();

  await screen.findByRole("img", { name: "JavaScript" });
});
