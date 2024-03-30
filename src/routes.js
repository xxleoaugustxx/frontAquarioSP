import {Routes, Route} from"react-router-dom";
import App from "./App";
import Create from "./pages/create";
import Overview from "./pages/overview";

function MainRoutes(){

    return(
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/create" element={<Create />}/>
            <Route path="/overview" element={<Overview />}/>
        </Routes>
    )

}

export default MainRoutes;