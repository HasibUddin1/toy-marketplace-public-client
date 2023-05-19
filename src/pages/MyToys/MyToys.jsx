import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import UserSpecificToys from "./UserSpecificToys/UserSpecificToys";


const MyToys = () => {
    const { user } = useContext(AuthContext)

    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user])

    console.log(user?.email)

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
        </div>
    );
};

export default MyToys;