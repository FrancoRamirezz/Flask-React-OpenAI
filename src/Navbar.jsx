import React from "react";
import About from "./About";
import App from "./App";
import {Link} from "react-router-dom"
function Navbar(){





return(
<div>

<ui>
<li><Link to = "/About">About </Link></li>
<li><Link to = "/LoginForm">Login Form </Link></li>
<li>
  <Link to = "/Project">Projects</Link>  
</li>
</ui>






</div>



)

}
export default Navbar;