import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Links from './pages/Links'
import './assets/scss/style.scss'
import Account from "./components/Account";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/links" element={<Links />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
