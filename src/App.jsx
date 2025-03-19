import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Links from './pages/Links'
import './assets/scss/style.scss'
import Account from "./components/Account";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";
import Preview from "./pages/Preview";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/preview" element={<Preview />}></Route>
        <Route element={<Layout />}>
          <Route path="/links" element={<Links />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
