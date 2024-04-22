import "./App.css";
import Header from "./Header";
import Layout from "./Layout";
import Post from "./Post";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./UserContext";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />}></Route>
          <Route path={"/login"} element={<LoginPage />}>
            {" "}
          </Route>
          <Route path={"/register"} element={<RegisterPage />}>
            {" "}
          </Route>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
