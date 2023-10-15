import { useState } from "react";
import { 
    Outlet,
    Link,
} from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Root() {
    const [title, setTitle] = useState("Beranda");
    return (
      <>
        <Header />
        <div className="container min-vh-100">
            <Outlet />
        </div>
        <Footer />
      </>
    );
  }