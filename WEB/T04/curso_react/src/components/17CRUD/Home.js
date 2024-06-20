import "bootstrap/dist/css/bootstrap.min.css";
import "./css/crud.css"
//import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginLeft: "5px" }}>
              <a className="navbar-brand" href="/">
                CRUD-WEB
              </a>
            </span>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item center-li" >
                {/** INÍCIO - DROPDOWN DE PROFESSOR */}
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle button-as-text"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Professor
                  </button>

                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/professores/listar" className="dropdown-item">
                        Listar Professor
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/professores/criar">
                        Criar Professor
                      </a> 
                    </li>
                  </ul>
                </div>
                {/** FIM - DROPDOWN DE PROFESSOR */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Home;
