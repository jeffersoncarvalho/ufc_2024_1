import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";

import { Criar as CriarProfessor } from "./professor/Criar";
import Listar from "./professor/Listar";
import Editar from "./professor/Editar";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <Home />,
            children: [
                {
                    path:"professor/listar",
                    element:<Listar />
                },
                {
                    path:"professor/criar",
                    element:<CriarProfessor />
                },
                {
                    path:"professor/editar",
                    element:<Editar />
                }
            ]
        }
    ]

)

const Main = () => {
    return (
        <RouterProvider router={router}/>
    )
}
export default Main