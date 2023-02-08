import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./page/user/Home";
import { Cart } from "./page/user/Cart";
import { Detail } from "./page/user/Detail";
import { Layout } from "./layout/userLayout";
import { AdminLayout } from "./layout/AdminLayout";
import { Product } from "./page/user/Product";
import { ListUser } from "./page/admin/listUser";
import { ProfileUSer } from "./page/admin/profileuser";
import { Login } from "./page/user/Login";
import { Register } from "./page/user/Register";
import { Addproduct } from "./page/admin/addproduct";
import { Products } from "./page/admin/listProduct";
import Payment from "./page/user/Payment";
import Account from "./page/user/Account";
import { BackendVariableProvider } from "./page/user/Backend/BackendVariable";
import { FaLeaf } from "react-icons/fa";
const root = ReactDOM.createRoot(document.getElementById("root"));
var backendVariable = {
  user: {
    id: "",
    email: "",
    pass: "",
    username: "",
    fullname: "",
    gender: "",
    birthday: "",
    phone: "",
  },
  isLogged: false,
  items: [],
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BackendVariableProvider value={backendVariable}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/Product/Detail/:id" element={<Detail />}></Route>
            <Route path="Cart" element={<Cart />} />
            <Route path="Product" element={<Product />} />
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            <Route path="/Customer/Profile" element={<Account />} />
            <Route index element={<Home />} />
          </Route>
          <Route path="/Payment" element={<Payment />}></Route>

          <Route path="/admin/" element={<AdminLayout />}>
            <Route path="users/:id" element={<ProfileUSer />}></Route>
            <Route path="users" element={<ListUser />} />
            <Route path="products" element={<Products />} />
            <Route path="addproduct" element={<Addproduct />} />
            <Route index element={<ListUser />} />
          </Route>
        </Routes>
      </BackendVariableProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
