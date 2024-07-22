import { Outlet, Link } from "react-router-dom"
const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/professor/listar"> LISTAR</Link>
            <Link to="/professor/editar"> EDITAR</Link>
            <Link to="/professor/criar"> CRIAR</Link>
            <Outlet />
        </div>   
    )
}

export default Home