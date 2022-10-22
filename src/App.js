import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import DhakaAddress from "./components/Dhaka-Office/DhakaAddress";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Order from "./components/Order/Order";
import RangpurAddress from "./components/Rangpur-Office/RangpurAddress";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Shop from "./components/Shop/Shop";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route
            path="/order"
            element={
              <RequireAuth>
                <Order />
              </RequireAuth>
            }
          ></Route>
          <Route path="/contact" element={<Contact />}>
            <Route path="RangpurAddress" element={<RangpurAddress />}></Route>
            <Route path="DhakaAddress" element={<DhakaAddress />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
