import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/*INÍCIO DA BARRA DE NAVEGAÇÃO*/}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          
          <a className="navbar-brand" href="www.bootstrap.com">
            Navbar
          </a>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="http://www.bootstrap.com">
                  Home
                </a>
              </li>
              {/*INÍCIO DO MENU DROPDOWN*/}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Professor
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="professor/listar">
                        Listar Professor
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="professor/criar">
                        Criar Professor
                    </Link>
                  </li>
                </ul>
              </li>
              {/*FIM DO MENU DROPDOWN*/}
            </ul>
          </div>
        </div>
      </nav>
      {/*FIM DA BARRA DE NAVEGAÇÃO*/}
      
      {/*INÍCIO DO CONTEÚDO DO SITE*/}
      <Outlet />
      {/*FIM DO CONTEÚDO DO SITE*/}
   
    </div>
  );
};

export default Home;

