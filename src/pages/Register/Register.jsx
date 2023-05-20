import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Swal from "sweetalert2";


const Register = () => {

    useTitle('Register')

    const { createUser, updateUsersProfile } = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value

        // console.log(name, photo)

        createUser(email, password)
        .then(result => {
            const registeredUser = result.user
            // console.log(registeredUser)
            Swal.fire({
                title: 'Success!',
                text: 'User has been successfully created',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
            updateUsersProfile(registeredUser,name, photo)
            .then(() => {
                alert('Users profile has been successfully updated')
            })
            .catch(error => {
                console.log(error)
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <div className="w-9/12 mx-auto mt-20">
                <div className="">
                    <div className="text-center lg:text-left mb-5">
                        <h1 className="text-5xl font-bold text-center">Register</h1>
                    </div>
                    <div className="card w-full shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="Email" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                                    <label className="label">
                                        <Link to='/login' className="label-text-alt link link-hover">Already have an account?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Register" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;