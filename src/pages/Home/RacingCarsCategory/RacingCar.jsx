import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";


const RacingCar = ({racingCar}) => {

    const { _id,name, picture, price, rating } = racingCar

    return (
        <div className="mx-auto">
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <p>Rating: <Rating
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                        readonly
                    /></p>
                    <div className="card-actions justify-end">
                    <div className="card-actions justify-end">
                        <Link to={`/toyDetails/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RacingCar;