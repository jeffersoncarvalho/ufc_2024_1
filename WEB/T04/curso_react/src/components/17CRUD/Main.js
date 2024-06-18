import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./Home"
import ErrorPage from "./ErrorPage"
import ListarProfessor from "./professores/Listar"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "professores/listar",
                element: <ListarProfessor />
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