import { useEffect, useState } from "react";
import Truck from "./Truck";


const TrucksCarCategory = () => {

    const [trucks, setTrucks] = useState([])

    useEffect(() => {
        fetch('https://assignment-11-server-side-mu.vercel.app/trucks')
        .then(res => res.json())
        .then(data => setTrucks(data))
    }, [])

    return (
        <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    trucks.map(truck => <Truck
                        key={truck._id}
                        truck={truck}
                    ></Truck>)
                }
            </div>
        </div>
    );
};

export default TrucksCarCategory;