import { Route, Routes } from "react-router-dom"
import Header from "@/components/Header/Header"
import Home from "@/pages/Home/Home"
import Products from "@/pages/Products/Products"
import Product from "@/pages/Products/Product"


function App() {


  return (
    <> 
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:id" element={<Product/>}/>
    </Routes>
    </>
  )
}

export default App
