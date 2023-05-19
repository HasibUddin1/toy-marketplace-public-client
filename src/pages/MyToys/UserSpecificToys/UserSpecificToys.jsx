import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const UserSpecificToys = ({ toy, toys, setToys }) => {

    const { _id, name, sellerName, quantity, category, price } = toy

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                //   Swal.fire(
                //     'Deleted!',
                //     'Your file has been deleted.',
                //     'success'
                //   )

                fetch(`https://assignment-11-server-side-mu.vercel.app/toyCars/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount > 0) {
                              Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                              const remaining = toys.filter(toy => toy._id !== _id)
                              setToys(remaining)
                        }
                    })
            }
        })
    }

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{sellerName}</div>
                    </div>
                </div>
            </td>
            <td>
                {name}
            </td>
            <td>{category}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <th>
                <Link to={`/updateToyInfo/${_id}`}><button className="btn btn-ghost btn-xs">Update</button></Link>
            </th>
            <th>
                <Link><button onClick={handleDelete} className="btn btn-ghost btn-xs">Delete</button></Link>
            </th>
        </tr>
    );
};

export default UserSpecificToys;