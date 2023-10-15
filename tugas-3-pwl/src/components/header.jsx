import {
    Link
} from "react-router-dom";

export default function Header() {
    return (
      <>
        {/* Top Nav */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">PWL-1</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTop" aria-controls="navbarTop" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Top Nav Content */}
                <div className="collapse navbar-collapse" id="navbarTop">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link active" aria-current="page">Beranda</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/tentang"} className="nav-link">Tentang</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/kontak"} className="nav-link">Kontak</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </>
    );
  }