import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./Home"
import ErrorPage from "./ErrorPage"
import ListarProfessor from "./professores/Listar"
import CriarProfessor from "./professores/Criar"
import EditarProfessor from "./professores/Editar"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "professores/listar",
                element: <ListarProfessor />
            },
            {
                path: "professores/criar",
                element: <CriarProfessor />
            },
            {
                path: "professores/editar",
                element: <EditarProfessor />
            }
        ]
    },
])

const Main = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Main