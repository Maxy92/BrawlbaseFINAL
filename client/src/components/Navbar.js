import * as mdb from "mdb-react-ui-kit"; // lib
import { Input } from "mdb-react-ui-kit"; // module
import Button from "./Button";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Brawl<span> BASE</span>

        </Link>
        

        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
        </div>
        <Button />
      </div>
    </nav>
  );
};

export default Navbar;
