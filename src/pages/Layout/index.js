import {Form, link, Outlet} from "react-router-dom";
import {RouterProvider , createBrowserRouter} from "react-router-dom";

const Layout =()=>{

    return(
        <div className="container">
            <Outlet/>
        </div>
    )
}

export default Layout;  //exporting the layout component  //