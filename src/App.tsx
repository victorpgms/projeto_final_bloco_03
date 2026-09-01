import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import ListaCategorias from "./components/categorias/listacategorias/ListaCategorias";
import FormCategorias from "./components/categorias/formcategoria/FormCategorias";
import DeletarCategorias from "./components/categorias/deletarcategoria/DeletarCategorias";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <div className="flex min-h-screen flex-col">
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/categorias" element={<ListaCategorias />} />
                    <Route
                        path="/categorias/cadastrar"
                        element={<FormCategorias />}
                    />
                    <Route
                        path="/categorias/editar/:id"
                        element={<FormCategorias />}
                    />
                    <Route
                        path="/categorias/deletar/:id"
                        element={<DeletarCategorias />}
                    />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
