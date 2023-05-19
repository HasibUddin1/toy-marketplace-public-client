import { Link } from "react-router-dom";


const SingleToy = ({toy}) => {

    // console.log(toy)

    const {_id, name, sellerName, quantity, category, price} = toy

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
                <Link to={`/toyDetails/${_id}`}><button className="btn btn-ghost btn-xs">View Details</button></Link>
            </th>
        </tr>
    );
};

export default SingleToy;