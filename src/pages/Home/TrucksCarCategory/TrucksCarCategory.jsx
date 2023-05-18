import { useEffect, useState } from "react";


const TrucksCarCategory = () => {

    const [trucks, setTrucks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/trucks')
        .then(res => res.json())
        .then(data => setTrucks(data))
    }, [])

    return (
        <div>
            <h1 className="text-5xl text-center">{trucks.length}</h1>
        </div>
    );
};

export default TrucksCarCategory;