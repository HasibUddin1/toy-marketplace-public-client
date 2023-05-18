

const AddAToy = () => {
    return (
        <div>
            <div className="w-9/12 mx-auto mt-20">
                <div className="">
                    <div className="text-center lg:text-left mb-5">
                        <h1 className="text-5xl font-bold text-center">Add Your Own Toy</h1>
                    </div>
                    <div className="card w-full shadow-2xl">
                        <div className="card-body">
                            <form>
                                <div className="flex gap-10">
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Picture</span>
                                        </label>
                                        <input type="text" name="picture" placeholder="Picture" className="input input-bordered" />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Toy Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Toy Name" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="flex gap-10">
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Seller Name</span>
                                        </label>
                                        <input type="text" name="sellerName" placeholder="Seller Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Seller Email</span>
                                        </label>
                                        <input type="text" name="sellerEmail" placeholder="Seller Email" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="flex gap-10">
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Sub-Category</span>
                                        </label>
                                        <input type="text" name="subCategory" placeholder="Sub-Category" className="input input-bordered" />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" name="price" placeholder="Price" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="flex gap-10">
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered" />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Available Quantity</span>
                                        </label>
                                        <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input type="text" name="description" placeholder="Description" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Register" />
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