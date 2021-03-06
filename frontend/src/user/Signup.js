//  import React, {useState} from 'react'
// import Base from '../core/Base'
// import {signup} from "../auth/helper"
// import {Link} from 'react-router-dom'

// const Signup = () => {
//     const [values, setValues] = useState({
//         name: "",
//         email: "",
//         password: "",
//         error: "",
//         success: false
//     })

//     const {name, email, password, error, success} = values

//     const handleChange = name => event => {
//         setValues({...values, error: false, [name]: event.target.value})
//     }

//     const onSubmit = event => {
//         event.preventDefault()
//         setValues({...values, error: false})
//         signup({name, email, password})
//         .then(data => {
//             if (data.error){
//                 setValues({...values, error: data.error, success: false})
//             }else {
//                 setValues({
//                     ...values,
//                     name: "",
//                     email: "",
//                     password: "",
//                     error: "",
//                     success: true
//                 })
//             }
//         })
//         .catch( console.log("Error in singup"))
//     }

//     const signUpForm = () => {
//         return (
//             <div className="row">
//                 <div className="col-md-6 offset-sm-3 text-left">
//                     <form>
//                         <div className="form-group">
//                             <label className="text-light">Name</label>
//                             <input className="form-control"
//                             onChange={handleChange("name")}
//                             value={name}
//                             type="text" />
//                         </div>
//                         <div className="form-group">
//                             <label className="text-light">Email</label>
//                             <input className="form-control" 
//                             onChange={handleChange("email")}
//                             value={email}
//                             type="email" />
//                         </div>
//                         <div className="form-group">
//                             <label className="text-light">Password</label>
//                             <input className="form-control" 
//                             onChange={handleChange("password")}
//                             value={password}
//                             type="password" />
//                         </div>
//                         <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
//     return(
//         <Base title="Sing up Page" description="Page for user to sign up!">
//             {signUpForm()}
//             {/* <p>{JSON.stringify(values)}</p> */}
//         </Base>
//     )
// }

// export default Signup