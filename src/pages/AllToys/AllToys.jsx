import { useLoaderData } from "react-router-dom";
import SingleToy from "./SingleToy/SingleToy";
import { useState } from "react";
import useTitle from "../../hooks/useTitle";


const AllToys = () => {

    useTitle('All Toys')

    const loadedToys = useLoaderData()
    // console.log(toys)
    const [toys, setToys] = useState(loadedToys)

    const [searchText, setSearchText] = useState('')
    // console.log(searchText)

    const handleSearch = () => {
        fetch(`https://assignment-11-server-side-mu.vercel.app/getToysByText/${searchText}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setToys(data)
            })
    }


    return (
        <div>
            <div className="w-1/2 mx-auto mb-10">
                <input onChange={(event) => setSearchText(event.target.value)} type="text" placeholder="Search here" className="input input-bordered input-warning w-full mt-10" />
                <div className="w-1/2 mx-auto">
                    <button className="w-full bg-amber-500 mt-2 py-2 px-6 rounded-xl hover:bg-amber-700 ease-in-out duration-200 text-white font-bold" onClick={handleSearch}>Search</button>
                </div>
            </div>
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
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            toys.map(toy => <SingleToy
                                key={toy._id}
                                toy={toy}
                            ></SingleToy>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;