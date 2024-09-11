import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import CriarProfessor from "./components/professor/CriarProfessor" 
import ListarProfessor from "./components/professor/ListarProfessor";
import EditarProfessor from "./components/professor/EditarProfessor";

import Firebase from "./utils/Firebase";
import FirebaseContext from "./utils/FirebaseContext";

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
                path:"professores/editar/:id",
                element:<EditarProfessor />
            },
        ]
    }
])

const Main = () => {
    return (
        <FirebaseContext.Provider value={new Firebase()}>
            <RouterProvider router={router}/>
        </FirebaseContext.Provider> 
    )
}
export default Main