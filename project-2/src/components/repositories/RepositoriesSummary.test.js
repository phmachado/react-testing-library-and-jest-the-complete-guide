import { render, screen } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("it should render the component and print out a language", () => {
  const repository = {
    language: "TypeScript",
    stargazers_count: 5,
    open_issues: 32,
    forks: 1,
  };

  render(<RepositoriesSummary repository={repository} />);

  const language = screen.getByText("TypeScript");

  expect(language).toBeInTheDocument();
});
