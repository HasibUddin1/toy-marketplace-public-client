import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="bg-amber-500">
            <div className="flex justify-between items-center px-20 py-5">
                <div className="flex gap-5 items-center">
                    <img className="h-[50px] w-[50px] rounded-full" src="https://i.ibb.co/hdkf5Q7/logo.jpg" alt="" />
                    <h2 className="text-5xl font-bold">Toy Cars</h2>
                </div>
                <div className="flex gap-5">
                    <Link className="font-semibold text-xl hover:bg-gray-300 px-2 rounded-lg" to='/'>Home</Link>
                    <Link className="font-semibold text-xl hover:bg-gray-300 px-2 rounded-lg" to='/allToys'>All Toys</Link>
                    <Link className="font-semibold text-xl hover:bg-gray-300 px-2 rounded-lg" to='/myToys'>My Toys</Link>
                    <Link className="font-semibold text-xl hover:bg-gray-300 px-2 rounded-lg" to='/addAToy'>Add A Toy</Link>
                    <Link className="font-semibold text-xl hover:bg-gray-300 px-2 rounded-lg" to='/blogs'>Blogs</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;