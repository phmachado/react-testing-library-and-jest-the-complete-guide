import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { createServer } from "../../test/server";
import AuthButtons from "./AuthButtons";

// createServer() --> GET '/api/user' --> { user: null }
test("when user is not signed in, sign in and sign up are visable", async () => {});
test("when user is not signed in, sign out is not visible", async () => {});

// createServer() --> GET '/api/user' --> { user: { id: 1, email: "john@gmail.com" } }
test("when user is signed in, sign in and sign up are not visable", async () => {});
test("when user is signed in, sign out is visible", async () => {});
