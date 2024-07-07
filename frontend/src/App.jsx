import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { SignIn } from "./Components/SignIn";
import Home from "./Home";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
