import "./App.css";
import House from "./House";
import Info from "./Info";
import data from "./db/data.json";
import { useState } from "react";

interface HouseData {
    id: number;
    name: string;
    flats: number;
    flats_0_60: number;
    flats_60_90: number;
    flats_90_150: number;
    flats_150: number;
    unknown: number;
    hotels: number;
    offices: number;
    industrial: number;
    growth: number;
}

const App = () => {
    const houseData: HouseData[] = data.data;

    houseData.sort((a: HouseData, b: HouseData) => {
        return b.flats - a.flats;
    });

    const [selected, setSelected] = useState(1)
        

    return (
        <main>
            <div className="graph">
                {houseData.map((house: HouseData) => {
                    return (
                        <House key={house.name} houseData={house} setSelected={setSelected} />
                    );
                })}
            </div>
            <div className="seperator"></div>
            <div className="info">
                <Info selected={selected} houseData={houseData} />
            </div>
        </main>
    );
};

export default App;
