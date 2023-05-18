import { useEffect, useState } from "react";


const SportsCarCategory = () => {

    const [sportsCars, setSportsCars] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/sportsCar')
        .then(res => res.json())
        .then(data => setSportsCars(data))
    }, [])

    return (
        <div>
            <h1 className="text-5xl text-center">{sportsCars.length}</h1>
        </div>
    );
};

export default SportsCarCategory;