import { Route, Routes } from "react-router-dom"
import { HomePage, ProductDetail, ProductsList, Register, Login, CartPage, OrderPage, DashboardPage } from "../pages"
import { ProtectedRoutes } from "./ProtectedRoutes"
import { PageNotFound } from "../pages"


export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/"  element={<HomePage/>}></Route>
        <Route path="products"  element={<ProductsList/>}></Route>
        <Route path="products/:id" element={<ProductDetail/>} ></Route>
        <Route path="register" element={<Register/>} ></Route>
        <Route path="login" element={<Login/>} ></Route>
        <Route path="cart" element={<ProtectedRoutes><CartPage/></ProtectedRoutes>} ></Route>
        <Route path="order" element={<ProtectedRoutes><OrderPage/></ProtectedRoutes>} ></Route>
        <Route path="dashboard" element={<ProtectedRoutes><DashboardPage/></ProtectedRoutes>} ></Route>
        <Route path="*" element={<PageNotFound/>} ></Route>

    </Routes>
    </>
  )
}
