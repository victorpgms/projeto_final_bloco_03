import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <div className="flex min-h-screen flex-col">
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
