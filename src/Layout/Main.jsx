import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import './Main.css'


const Main = () => {
    return (
        <div>
            <div className="allButFooter">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;