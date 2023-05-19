import { useEffect, useState } from "react";
import RacingCar from "./RacingCar";


const RacingCarsCategory = () => {

    const [racingCars, setRacingCars] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/racingCars')
        .then(res => res.json())
        .then(data => setRacingCars(data))
    }, [])

    return (
        <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    racingCars.map(racingCar => <RacingCar
                        key={racingCar._id}
                        racingCar={racingCar}
                    ></RacingCar>)
                }
            </div>
        </div>
    );
};

export default RacingCarsCategory;