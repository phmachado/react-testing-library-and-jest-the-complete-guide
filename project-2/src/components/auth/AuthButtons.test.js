import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { createServer } from "../../test/server";
import AuthButtons from "./AuthButtons";

describe("when user is not signed in", () => {
  createServer([
    {
      path: "/api/user",
      res: () => {
        return { user: null };
      },
    },
  ]);
  test("when user is not signed in, sign in and sign up are visable", async () => {});
  test("when user is not signed in, sign out is not visible", async () => {});
});

describe("when user is signed in", () => {
  createServer([
    {
      path: "/api/user",
      res: () => {
        return { user: { id: 1, email: "john@gmail.com" } };
      },
    },
  ]);
  test("when user is signed in, sign in and sign up are not visable", async () => {});
  test("when user is signed in, sign out is visible", async () => {});
});
