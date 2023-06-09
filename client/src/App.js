import React, { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

import Register from "./pages/Register";
import CreateRecipe from "./pages/Create";

import Recipes from "./pages/Recipes";
import Favorites from "./pages/Favorites";
import Random from "./pages/Random";
import MyRecipes from "./pages/My Recipes";

import CssBaseline from "@mui/material/CssBaseline";
import SearchBar from "./pages/SearchBanner";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("auth_token");
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [pageState, setPageState] = useState({
    recipes: true,
    random: false,
    login: false,
    create: false,
    favorites: false,
    search: true,
    myRecipes: false,
  });

  return (
    <>
      <ApolloProvider client={client}>

        <Home pageState={pageState} setPageState={setPageState} />
        {pageState.search ? <SearchBar /> : ""}
        {pageState.recipes ? <Recipes /> : ""}
        {pageState.random ? <Random /> : ""}
        {pageState.login ? <Login /> : ""}
        {pageState.create ? <CreateRecipe /> : ""}
        {pageState.favorites ? <Favorites /> : ""}
        {pageState.myRecipes ? <MyRecipes /> : ""}
      </ApolloProvider>

      <CssBaseline />
    </>
  );
}

export default App;
