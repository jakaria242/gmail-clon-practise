import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Registration from "./pages/registration/Registration";
import SignIn from "./pages/signin/SignIn";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <>
    <Route path="/" element={<SignIn/>}/>
    <Route path="/registration" element={<Registration/>}/>
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
