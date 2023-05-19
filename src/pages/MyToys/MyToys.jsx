import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import UserSpecificToys from "./UserSpecificToys/UserSpecificToys";
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import useTitle from "../../hooks/useTitle";


const MyToys = () => {

    useTitle('My Toys')

    const { user } = useContext(AuthContext)

    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch(`https://assignment-11-server-side-mu.vercel.app/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user])

    // console.log(user?.email)
    const handleSortingAscending = () => {
        fetch(`https://assignment-11-server-side-mu.vercel.app/myToysByPricesAscending/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setToys(data)
            })
    }

    const handleSortingDescending = () => {
        fetch(`https://assignment-11-server-side-mu.vercel.app/myToysByPricesDescending/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setToys(data)
            })
    }

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            toys.map(toy => <UserSpecificToys
                                key={toy._id}
                                toy={toy}
                                toys={toys}
                                setToys={setToys}
                            ></UserSpecificToys>)
                        }
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center gap-5">
                <button className="flex items-center gap-2 bg-gray-500 text-white font-bold px-6 py-2 rounded-xl hover:bg-gray-700 ease-in-out duration-200" onClick={handleSortingAscending}>Sort By Prices <FaArrowUp></FaArrowUp></button>
                <button className="flex items-center gap-2 bg-gray-500 text-white font-bold px-6 py-2 rounded-xl hover:bg-gray-700 ease-in-out duration-200" onClick={handleSortingDescending}>Sort By Prices <FaArrowDown></FaArrowDown></button>
            </div>
        </div>
    );
};

export default MyToys;