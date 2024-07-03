import {Routes, Route} from "react-router-dom";
import {Home} from "../pages/Home";
import {Clients} from "../pages/Clients";
import {Configuration} from "../pages/Configuration";
import {Products} from "../pages/Products";
import {Reports} from "../pages/Reports";
import {Users} from "../pages/Users";
import {Login} from "../components/Login.jsx";


export function MyLoginRoute(){
    return(
        <Routes>
        <Route path="/login" element={<Login/>}/>
        </Routes>
    );
}
export function MyRoutes(){
    return(
                
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/configuration" element={<Configuration/>}/>
                    <Route path="/clients" element={<Clients/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/reports" element={<Reports/>}/>
                    <Route path="/users" element={<Users/>}/>
                </Routes>
    );
}
