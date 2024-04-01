import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Onebox } from "./Onebox";
// import { PrivateRoute } from "../Components/PrivateRoute"

export const AllRoutes = ()=>{
    return (
        <Routes>
            
            <Route path="/" element={<Login />} />
            <Route path="/onebox" element={<Onebox />} />
            <Route path="/onebox/:thread_id" element={<Onebox />} />

        
        </Routes>
    )
}