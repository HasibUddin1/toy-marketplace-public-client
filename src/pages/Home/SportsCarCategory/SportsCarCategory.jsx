import { useEffect, useState } from "react";
import SportsCar from "./SportsCar";


const SportsCarCategory = () => {

    const [sportsCars, setSportsCars] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/sportsCar')
        .then(res => res.json())
        .then(data => setSportsCars(data))
    }, [])

    return (
        <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {
                    sportsCars.map(sportsCar => <SportsCar
                        key={sportsCar._id}
                        sportsCar = {sportsCar}
                    ></SportsCar>)
                }
            </div>
        </div>
    );
};

export default SportsCarCategory;