import "App.js";

import "index.js";
import { useState } from "react";

function Login_Form(){
const  [loginform, setloginform] = useState("")
const [checkEmail, setcheckEmail ] = useState("")

const click = (e) => {
<button onClick={e}>Click here</button>
}
 
return(
<div>

<h1> Login Form</h1>


</div>
)

}




export default Login_Form;




