import { useLoaderData } from "react-router-dom";
import SingleToy from "./SingleToy/SingleToy";


const AllToys = () => {

    const toys = useLoaderData()
    console.log(toys)

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