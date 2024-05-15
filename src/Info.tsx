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


const Info = ({ selected, houseData }: { selected: number, houseData: HouseData[] }) => {
    const selectedHouse = houseData.find((house) => house.id === selected);
    if (!selectedHouse) {
        return null;
    }

    const isPositiveGrowth = selectedHouse.growth > 0;
    return (
        <>
            <h1>{selectedHouse.name}</h1>
            <p>Flats: {selectedHouse.flats}</p>
            <br/>
            <p style={{color: "#eba0ac"}}>150m²+: {Math.round(selectedHouse.flats_150 * 100)}%</p>
            <p style={{color: "#a6e3a1"}}>90-150m²: {Math.round(selectedHouse.flats_90_150 * 100)}%</p>
            <p style={{color: "#74c7ec"}}>60-90m²: {Math.round(selectedHouse.flats_60_90*100)}%</p>
            <p style={{color: "#6c7086"}}>Unknown: {Math.round(selectedHouse.unknown * 100)}%</p>
            <p style={{ color: "#cba6f7" }}>0-60m²: {Math.round(selectedHouse.flats_0_60 * 100)}%</p>
            <br/>
            <p>Hotels: {selectedHouse.hotels}</p>
            <p>Offices: {selectedHouse.offices}</p>
            <p>Industrial: {selectedHouse.industrial}</p>
            {isPositiveGrowth ? <p>Growth: {selectedHouse.growth}%</p> : <p>Decline: {selectedHouse.growth}%</p>}
        </>
    );
}

export default Info;