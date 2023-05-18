import { Link } from "react-router-dom";


const Login = () => {

    const handleLogin = event => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
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
                                    <input type="text" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <Link to='/register' className="label-text-alt link link-hover">New to this site?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;