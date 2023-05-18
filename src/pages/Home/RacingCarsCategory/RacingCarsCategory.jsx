import { useEffect, useState } from "react";


const RacingCarsCategory = () => {

    const [racingCars, setRacingCars] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/racingCars')
        .then(res => res.json())
        .then(data => setRacingCars(data))
    }, [])

    return (
        <div>
            <h1 className="text-5xl text-center">{racingCars.length}</h1>
        </div>
    );
};

export default RacingCarsCategory;