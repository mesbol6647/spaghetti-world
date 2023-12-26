
import Main from "./pages/Main";
import NewProduct from "./pages/NewProduct";
import ProductList from "./pages/ProductList";
import LoginForm from "./pages/LoginForm";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateProduct from "./pages/UpdateProduct";
function App() {

  

  return (
    <div className="bg-light app">
      <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Main/>}/>        
        <Route path="/new-product" element={ <NewProduct/>}/>   
        <Route path="/product-list" element={ <ProductList/>}/>   
        <Route path="/loginform" element={ <LoginForm/>}/>   
        <Route path="/update-product" element={ <UpdateProduct/>}/>   
           
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
