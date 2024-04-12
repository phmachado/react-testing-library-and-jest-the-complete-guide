import { render, screen, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RepositoriesListItem from "./RepositoriesListItem";

// jest.mock("../tree/FileIcon", () => {
//   // content of FileIcon.js
//   return () => {
//     return "File Icon Component";
//   };
// });

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

  return { repository };
}

test("it renders component and shows a link to the repository github page", async () => {
  const { repository } = renderComponent();

  //   await act(async () => {
  //     await pause();
  //   });

  await screen.findByRole("img", { name: "JavaScript" });

  const link = screen.getByRole("link", { name: /github repository/i });
  expect(link).toHaveAttribute("href", repository.html_url);
});

// const pause = () => new Promise((resolve) => setTimeout(resolve, 100));
