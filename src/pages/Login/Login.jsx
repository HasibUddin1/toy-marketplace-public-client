import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Swal from "sweetalert2";


const Login = () => {

    useTitle('Login')

    const { googleSignIn, handleSignIn } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                Swal.fire({
                    title: 'Success!',
                    text: 'You have successfully logged in',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleLogin = event => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        handleSignIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                Swal.fire({
                    title: 'Success!',
                    text: 'You have successfully logged in',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                navigate(from, { replace: true })
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
                        <h1 className="text-5xl font-bold text-center">Login</h1>
                    </div>
                    <div className="card w-full shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <Link to='/register' className="label-text-alt link link-hover">New to this site?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>
                            <div className="divider">OR</div>
                            <div className="text-center">
                                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                                    G
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;