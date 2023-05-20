import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import { FaRegStar, FaStar } from 'react-icons/fa';


const SingleToyDetails = () => {

    const toy = useLoaderData()
    // console.log(toy)
    const { picture, name, sellerName, sellerEmail, price, rating, quantity, description } = toy

    return (
        <div className="flex items-center bg-amber-100 px-20 py-10 gap-10">
            <div className="flex flex-col gap-10 w-1/2">
                <h2 className="text-4xl font-bold">{name}</h2>
                <p className="text-xl">{description}</p>
                <div>
                    <h4 className="text-2xl font-semibold">Seller Name: {sellerName}</h4>
                    <h4 className="text-2xl font-semibold">Seller Email: {sellerEmail}</h4>
                </div>
                <p className="text-xl font-semibold">Price: ${price}</p>
                <div className="flex gap-5">
                    <p className="text-xl font-semibold">Rating: <Rating
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                        readonly
                    /></p>
                    <p className="text-xl font-semibold">Available Quantity: {quantity}</p>
                </div>
            </div>
            <div className="w-1/2">
                <img className="rounded-3xl" src={picture} alt="" />
            </div>
        </div>
    );
};

export default SingleToyDetails;