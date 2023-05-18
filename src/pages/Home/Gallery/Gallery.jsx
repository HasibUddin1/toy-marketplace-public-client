

const Gallery = () => {
    return (
        <div className="w-9/12 mx-auto mt-10">
            <h1 className="text-5xl font-bold text-center">Explore Our <span className="text-amber-500">Best Cars Gallery</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                <div className="relative">
                    <img className="h-[500px] w-[500px] rounded-xl" src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="" />
                    <div className="absolute bottom-0 font-bold text-2xl p-5 bg-gradient-to-b from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full rounded-xl">
                        <h1 className="text-white">Construction Truck Adventure</h1>
                    </div>
                </div>
                <div className="relative">
                    <img className="h-[500px] w-[500px] rounded-xl" src="https://images.unsplash.com/photo-1594787317357-dcda50fd1d78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <div className="absolute bottom-0 font-bold text-2xl p-5 bg-gradient-to-b from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full rounded-xl">
                        <h1 className="text-white">Red Racing Speedster</h1>
                    </div>
                </div>
                <div className="relative">
                    <img className="h-[500px] w-[500px] rounded-xl" src="https://images.unsplash.com/photo-1574840173882-4ead2436f1bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="" />
                    <div className="absolute bottom-0 font-bold text-2xl p-5 bg-gradient-to-b from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full rounded-xl">
                        <h1 className="text-white">Vintage Convertible Cruiser</h1>
                    </div>
                </div>
                <div className="relative">
                    <img className="h-[500px] w-[500px] rounded-xl" src="https://images.unsplash.com/photo-1519581246333-78162706b927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" alt="" />
                    <div className="absolute bottom-0 font-bold text-2xl p-5 bg-gradient-to-b from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full rounded-xl">
                        <h1 className="text-white">Off-Road Explorer Jeep</h1>
                    </div>
                </div>
                <div className="relative">
                    <img className="h-[500px] w-[500px] rounded-xl" src="https://images.unsplash.com/photo-1456082902841-3335005c3082?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="" />
                    <div className="absolute bottom-0 font-bold text-2xl p-5 bg-gradient-to-b from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full rounded-xl">
                        <h1 className="text-white">Police Pursuit Cruiser</h1>
                    </div>
                </div>
                <div className="relative">
                    <img className="h-[500px] w-[500px] rounded-xl" src="https://images.unsplash.com/photo-1587292818536-5a404595dd36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1646&q=80" alt="" />
                    <div className="absolute bottom-0 font-bold text-2xl p-5 bg-gradient-to-b from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full rounded-xl">
                        <h1 className="text-white">Magical Unicorn Carriage</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;