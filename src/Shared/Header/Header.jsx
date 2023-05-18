import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <h1 className="text-4xl">This is Header</h1>
            <Link to='/'>Home</Link>
            <Link to='/allToys'>All Toys</Link>
            <Link to='/myToys'>My Toys</Link>
            <Link to='/addAToy'>Add A Toy</Link>
            <Link to='/blogs'>Blogs</Link>
        </div>
    );
};

export default Header;