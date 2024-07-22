import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import CriarProfessor from "./professor/CriarProfessor";
import ListarProfessor from "./professor/ListarProfessor";
import EditarProfessor from "./professor/EditarProfessor";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Home />,
        children: [
            {
                path:"professores/criar",
                element:<CriarProfessor />
            },
            {
                path:"professores/listar",
                element:<ListarProfessor />
            },
            {
                path:"professores/editar",
                element:<EditarProfessor />
            },
        ]
    }
])

const Main = () => {
    return (
        <RouterProvider router={router}/>
    )
}
export default Main