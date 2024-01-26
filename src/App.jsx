import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// import SignIn from "./pages/signin/SignIn";
import Navbar from "./components/navbar/Navbar";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <>
    {/* <Route path="/" element={<SignIn/>}/> */}
    <Route path="/" element={<Navbar/>}/>
    </>
    )
  );

  return (
   <RouterProvider
      router={router}
  />
  )
}

export default App
