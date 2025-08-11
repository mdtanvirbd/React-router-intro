import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const location = useLocation();
    const navigation = useNavigation();
    console.log(location)
    return (
        <div>
            <Header></Header>
            {
                navigation.status === "loading" ? <p>Loading...</p> 
                :<Outlet></Outlet>
            }
            
           
            <Footer></Footer>
            
        </div>
    );
};

export default Home;