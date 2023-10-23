import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Locations from "./pages/Locations";
import Episodes from "./pages/Episodes";
import RootLayout from "./layouts/RootLayout";

function App() {
    const routes = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="characters" element={<Characters />} />
                <Route path="episodes" element={<Episodes />} />
                <Route path="locations" element={<Locations />} />
            </Route>
        )
    );

    return (
        <>
                <RouterProvider router={routes} />
        </>
    );
}

export default App;
