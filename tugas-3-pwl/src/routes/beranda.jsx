import { 
    Link,
} from "react-router-dom";

export default function Beranda() {
    return (
      <>
        <div className="container p-3">
            <div className="row">
                <div className="col-sm-6">
                    <h1>Beranda</h1>
                    <p>Ini adalah halaman Beranda</p>
                </div>
                <div className="col-sm-6">
                    <h2>More About Us</h2>
                    <Link to={"/tentang"} className="btn btn-primary">Klik disini</Link>
                </div>
            </div>
            <div className="row container">
                <div className="row m-2">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card 1</h5>
                                <p className="card-text">Ini adalah card 1</p>
                                <Link to={"/kontak"} className="btn btn-primary">Kontak</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card 2</h5>
                                <p className="card-text">Ini adalah card 2</p>
                                <Link to={"/kontak"} className="btn btn-primary">Kontak</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card 2</h5>
                                <p className="card-text">Ini adalah card 2</p>
                                <Link to={"/kontak"} className="btn btn-primary">Kontak</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row m-2">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card 1</h5>
                                <p className="card-text">Ini adalah card 1</p>
                                <Link to={"/kontak"} className="btn btn-primary">Kontak</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card 2</h5>
                                <p className="card-text">Ini adalah card 2</p>
                                <Link to={"/kontak"} className="btn btn-primary">Kontak</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card 2</h5>
                                <p className="card-text">Ini adalah card 2</p>
                                <Link to={"/kontak"} className="btn btn-primary">Kontak</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <h2>Produk Terbaru</h2>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Card 2</h5>
                                    <p className="card-text">Ini adalah card 2</p>
                                    <Link to={"/kontak"} className="btn btn-primary">Kontak</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Card 2</h5>
                                    <p className="card-text">Ini adalah card 2</p>
                                    <Link to={"/kontak"} className="btn btn-primary">Kontak</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.</p>
                </div>
                <div className="col-sm-6">
                    <h2>Berita terkini</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatibus.
                    </p>
                </div>
            </div>
        </div>
        
      </>
    );
  }