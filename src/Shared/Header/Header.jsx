import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then(() => {
            Swal.fire({
                title: 'Success!',
                text: 'User has been successfully logged out',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="bg-amber-500">
            <div className="md:flex justify-between items-center px-5 md:px-20 py-5">
                <div className="flex gap-5 items-center mb-5">
                    <img className="h-[50px] w-[50px] rounded-full" src="https://i.ibb.co/hdkf5Q7/logo.jpg" alt="" />
                    <h2 className="text-5xl font-bold">Toy Cars</h2>
                </div>
                <div className="flex gap-5">
                    <Link className="font-semibold text-xl hover:bg-gray-300 px-2 rounded-lg" to='/'>Home</Link>
                    <Link className="font-semibold text-xl hover:bg-gray-300 px-2 rounded-lg" to='/allToys'>All Toys</Link>
                    <Link className="font-semibold text-xl hover:bg-gray-300 px-2 rounded-lg" to='/myToys'>My Toys</Link>
                    <Link className="font-semibold text-xl hover:bg-gray-300 px-2 rounded-lg" to='/addAToy'>Add A Toy</Link>
                    <Link className="font-semibold text-xl hover:bg-gray-300 px-2 rounded-lg" to='/blogs'>Blogs</Link>
                    {
                        user ?
                            <>
                                <div className="tooltip" data-tip={user?.displayName}>
                                    <img className="h-[30px] w-[30px] rounded-full" src={user?.photoURL} alt="" />
                                </div>
                                <button onClick={handleLogOut} className="font-semibold text-xl hover:bg-gray-300 px-2 rounded-lg">Log Out</button>
                            </> :
                            <Link className="font-semibold text-xl hover:bg-gray-300 px-2 rounded-lg" to='/login'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;