import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from "components/PaginaPadrao";
import Home from "pages/Home";
import Categoria from "pages/Categoria";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPadrao />}>
                    <Route index element={<Home />} />
                    <Route
                        path="/categoria/:nomeCategoria"
                        element={<Categoria />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
