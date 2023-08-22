import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Cities from "../pages/cities";
import Layout from "../layouts/layout";
import Details from "../pages/details";


const router = createBrowserRouter([
 {  path: '/', 
    element: <Layout/> , 
    children:[
    {   path: '/', element: <Home />  },
    {  path: '/cities', element: <Cities /> },
    {  path: '/cities/:id', element: <Details />},
    {  path:'*', element: <h1 className="bg-black text-white text-center drop-shadow-lightShadow">Error Page</h1> }
    ]},
])
export default router;