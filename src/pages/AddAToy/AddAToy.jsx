import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";


const AddAToy = () => {

    useTitle('Add A Toy')

    const {user} = useContext(AuthContext)
    // console.log(user)

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target
        const picture = form.picture.value
        const name = form.name.value
        const sellerName = form.sellerName.value
        const sellerEmail = form.sellerEmail.value
        const category = form.subCategory.value
        const price = form.price.value
        const rating = form.rating.value
        const quantity = form.quantity.value
        const description = form.description.value

        const toyInfo ={
            picture,
            name,
            sellerName,
            sellerEmail,
            category,
            price,
            rating,
            quantity,
            description
        }

        console.log(toyInfo)

        fetch('https://assignment-11-server-side-mu.vercel.app/toyCars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(toyInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your toy has been successfully added',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div>
            <div className="w-9/12 mx-auto mt-20">
                <div className="">
                    <div className="text-center lg:text-left mb-5">
                        <h1 className="text-5xl font-bold text-center">Add Your Own Toy</h1>
                    </div>
                    <div className="card w-full shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="flex gap-10">
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Picture</span>
                                        </label>
                                        <input type="text" name="picture" placeholder="Picture" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Toy Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Toy Name" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="flex gap-10">
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Seller Name</span>
                                        </label>
                                        <input type="text" defaultValue={user.displayName} name="sellerName" placeholder="Seller Name" className="input input-bordered" readOnly required />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Seller Email</span>
                                        </label>
                                        <input type="text" defaultValue={user.email} name="sellerEmail" placeholder="Seller Email" className="input input-bordered" readOnly required />
                                    </div>
                                </div>
                                <div className="flex gap-10">
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Sub-Category</span>
                                        </label>
                                        <input type="text" name="subCategory" placeholder="Sub-Category" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="flex gap-10">
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Available Quantity</span>
                                        </label>
                                        <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input type="text" name="description" placeholder="Description" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Add Your Toy" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAToy;