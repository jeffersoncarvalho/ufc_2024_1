import { Link, Outlet } from "react-router-dom"
const Home = () => {
    return (
        <div>
            
            <h1>Home</h1>
            <Link to="/professores/criar" style={{margin:"10px"}}>Criar</Link>
            <Link to="/professores/editar" style={{margin:"10px"}}>Editar</Link>
            <Link to="/professores/listar" style={{margin:"10px"}}>Listar</Link>
            <hr />
            <Outlet />
        </div>
    )
}

export default Home