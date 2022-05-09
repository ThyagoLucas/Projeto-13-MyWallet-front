import { Routes, Route, BrowserRouter } from "react-router-dom";

import TokenContext from "./context/TokenContext";

import CashIn from "./CashIn";
import CashOut from "./CashOut";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";

function App(){

    const [token, setToken] = useState(localStorage.getItem('token'));

    return(
        <TokenContext.Provider value={{token, setToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}></Route>
                    <Route path="/cadastro" element={<Register/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/entrada" element={<CashIn/>}></Route>
                    <Route path="/saida" element={<CashOut/>}></Route>
                </Routes>
            </BrowserRouter>
        </TokenContext.Provider>
    )
}

export default App;