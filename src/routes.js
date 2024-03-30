import {Routes, Route} from"react-router-dom";
import App from "./App";
import Create from "./pages/create";
import Overview from "./pages/overview";
import Home from "./pages/home";

function MainRoutes(){

    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/create" element={<Create />}/>
            <Route path="/overview" element={<Overview />}/>
        </Routes>
    )

}

export default MainRoutes;