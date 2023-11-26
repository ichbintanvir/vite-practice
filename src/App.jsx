import Form from "./component/Form";
import ToDoList from "./component/ToDoList";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ProductsPage from "./pages/ProductsPage";
import ProfilePage from "./pages/ProfilePage";
function App() {
  const postFromData = (event) => {
    event.preventDefault();
    alert('AA JAIGA')
  }
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id/:name" element={<ProductsPage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
      {/* <ToDoList /> */}
      {/* <Form per={postFromData} /> */}
      {/* <HomePage />
      <ProfilePage />
      <ProductsPage />
      <NotFound /> */}
      {/* <BrowserRouter> */}
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
