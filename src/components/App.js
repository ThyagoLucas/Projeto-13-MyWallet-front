import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

function App(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/cadastro" element={<Register/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;