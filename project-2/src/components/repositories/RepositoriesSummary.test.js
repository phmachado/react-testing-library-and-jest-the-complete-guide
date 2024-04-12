import { render, screen } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("it should render the component and print out the correct information about the repository", () => {
  const repository = {
    language: "TypeScript",
    stargazers_count: 5,
    open_issues: 32,
    forks: 1,
  };

  render(<RepositoriesSummary repository={repository} />);

  for (let key in repository) {
    const value = repository[key];
    const element = screen.getByText(new RegExp(value));
    expect(element).toBeInTheDocument();
  }
});
