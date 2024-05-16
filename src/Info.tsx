import construction from './assets/construction.svg';

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
            
            <h1 style={{ fontSize: selectedHouse.name.length > 12 ? "1.85rem" : "2.5rem" }}>{selectedHouse.name}</h1>
            <div className="info-header">
                <h2 className="flats">
                    Wohnungen
                    <span>{selectedHouse.flats}</span>
                </h2>
            </div>
            <div className="flat-sizes">
                <h2>Wohnungsgrößen</h2>
                <div>
                <div className="size info_0_60">
                    <h3>0-60m²</h3>
                    <span>{Math.round(selectedHouse.flats_0_60 * 100)}%</span>
                </div>
                <div className="size info_60_90">
                    <h3>60-90m²</h3>
                    <span>{Math.round(selectedHouse.flats_60_90 * 100)}%</span>
                </div>
                <div className="size info_90_150">
                    <h3>90-150m²</h3>
                    <span>{Math.round(selectedHouse.flats_90_150 * 100)}%</span>
                </div>
                <div className="size info_150">
                    <h3>150m²+</h3>
                    <span>{Math.round(selectedHouse.flats_150 * 100)}%</span>
                </div>
                <div className="size info_unknown">
                    <h3>Unbekannt</h3>
                    <span>{Math.round(selectedHouse.unknown * 100)}%</span>
                    </div>
                </div>
            </div>
            <div className="categories">
                <h2>Gebäudearten (Top 3)</h2>
                <div>
                    <div className="category hotels">
                        <h3>Hotels</h3>
                        <div className="info_shape"></div>
                        <span>{selectedHouse.hotels}</span>
                    </div>
                    <div className="category offices">
                        <h3>Büros</h3>
                        <div className="info_shape"></div>
                        <span>{selectedHouse.offices}</span>
                    </div>
                    <div className="category industrial">
                        <h3>Industrie</h3>
                        <div className="info_shape"></div>
                        <span>{selectedHouse.industrial}</span>
                    </div>
                </div>
            </div>
            <div className="info_growth">
                <h2>Wachstum (Neue Wohnungen)</h2>
                <span>2011 - 2015 <strong>vs.</strong> 2016 - 2020</span>
                <div className={isPositiveGrowth ? "growth_icon positive" : "growth_icon negative"}>
                    <div className="growth normal">
                        <img src={construction} alt="Construction" />
                    </div>
                    <span>{selectedHouse.growth}%</span>
                </div>
            </div>
            
        </>
    );
}

export default Info;