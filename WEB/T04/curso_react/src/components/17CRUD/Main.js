import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";

import { Criar } from "./components/professor/Criar";
import Listar from "./components/professor/Listar";
import Editar from "./components/professor/Editar";

import Firebase from "./utils/Firebase"
import FirebaseContext from "./utils/FirebaseContext"

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
                    element:<Criar />
                },
                {
                    path:"professor/editar/:id",
                    element:<Editar />
                }
            ]
        }
    ]

)

const Main = () => {
    return (
        <FirebaseContext.Provider value={new Firebase()}>
            <RouterProvider router={router}/>
        </FirebaseContext.Provider >
        
    )
}
export default Main