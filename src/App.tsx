import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apollo";
import Ignite from "./pages/Ignite";
import Login from "./pages/login";
import { MenuContextProvider } from "./context/MenuContext";

const App = () => {
  return (
    <MenuContextProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/ignite" element={<Ignite />} />
            <Route path="/ignite/lesson/:slug" element={<Ignite />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </MenuContextProvider>
  );
};

export default App;
