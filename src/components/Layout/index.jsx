import { Outlet } from "react-router-dom";
import Background from "../Background";
import Header from "../Header";
import Footer from "../Footer";

function Layout() {
    return (
        <section className="relative bg-(--bg) w-full min-h-screen overflow-hidden">
            <Background>
                <div className="relative z-10">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </Background>
        </section>
    )
}

export default Layout;