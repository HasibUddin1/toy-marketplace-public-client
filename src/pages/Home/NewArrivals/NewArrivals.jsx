

const NewArrivals = () => {
    return (
        <div className="mt-10 w-9/12 mx-auto">
            <h1 className="text-4xl text-center font-bold mb-5">Our New <span className="text-amber-500">Arrivals</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="bg-amber-500"><img className="w-3/4 h-[300px]" src="https://i.ibb.co/f447RTj/new-arrivals-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Racing Toy!
                            <div className="badge bg-amber-500 border-none">NEW</div>
                        </h2>
                        <p>Get ready for high-speed action with the Speed Racer Remote-Controlled Sports Car!
                        </p>
                        <div className="card-actions justify-end">
                            <div className="badge bg-primary">Toys</div>
                            <div className="badge bg-primary">New Toys</div>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="bg-amber-500"><img className="w-3/4 h-[300px]" src="https://i.ibb.co/sPz4mnc/new-arrivals-2.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Police Toy!
                            <div className="badge bg-amber-500 border-none">NEW</div>
                        </h2>
                        <p>Conquer any terrain with the Off-Road Monster Truck! This rugged and powerful toy truck is built for off-road adventures</p>
                        <div className="card-actions justify-end">
                            <div className="badge bg-primary">Toys</div>
                            <div className="badge bg-primary">New Toys</div>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="bg-amber-500"><img className="w-3/4 h-[300px]" src="https://i.ibb.co/zRXJrB3/new-arrivals-4.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Racing Toy!
                            <div className="badge bg-amber-500 border-none">NEW</div>
                        </h2>
                        <p>Experience the ultimate fusion of robots and cars with the Transforming Robot Car!</p>
                        <div className="card-actions justify-end">
                            <div className="badge bg-primary">Toys</div>
                            <div className="badge bg-primary">New Toys</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;