import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Error from "./pages/Error";
import LoginCadastro from "./pages/LoginCadastro";
import Home from "./pages/Home";
import TesteScroll from "./pages/TesteScroll";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/login-cadastro" element={<LoginCadastro />} />
                <Route path="/home" element={<Home />} />
                <Route path="/teste" element={<TesteScroll />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )

}

export default RoutesApp;