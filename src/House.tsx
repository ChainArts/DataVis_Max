import construction from './assets/construction.svg';
import {Dispatch, SetStateAction } from 'react';
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


const Windows = ({ shape, count }: { shape: string, count: number }) => {
    console.log("Rendering windows with shape:", shape, "and count:", count);
    return (
        <div className="windows">
            {[...Array(count)].map((_, index) => {
                return (
                    <div
                        key={index}
                        className={`window ${shape}`}
                        style={{
                            borderRadius: shape === "rectangle" || shape === "tilted" ? "0" : "50%",
                        }}
                    ></div>
                );
            })}
        </div>
    );
};

const House = ({ houseData, setSelected }: { houseData: HouseData, setSelected: Dispatch<SetStateAction<number>>}) => {
    const height_0_60 = Math.floor(houseData.flats * houseData.flats_0_60 / 140);
    const height_60_90 = Math.floor(houseData.flats * houseData.flats_60_90 / 140);
    const height_90_150 = Math.floor(houseData.flats * houseData.flats_90_150 / 140);
    const height_150 = Math.floor(houseData.flats * houseData.flats_150 / 140);
    const height_unknown = Math.floor(houseData.flats * houseData.unknown / 140);

    const isPositiveGrowth = houseData.growth > 0;

    const highestFlatCategory = Math.max(houseData.hotels, houseData.offices, houseData.industrial);

    
    const highestFlatCategoryName = highestFlatCategory === houseData.hotels ? "hotels" : highestFlatCategory === houseData.offices ? "offices" : "industrial";

    const shape = highestFlatCategoryName === "hotels" ? "rectangle" : highestFlatCategoryName === "offices" ? "circle" : "tilted";
    //Get the number of windows based on the number of highest flat category name
    const windowCount = (Math.floor(highestFlatCategory / 100));

    return (
        <div className='house-container' onClick={() => setSelected(houseData.id)}>
        <h1>{houseData.name}</h1>
            <div className="house">
            <Windows shape={shape} count={windowCount} />
            
            <div style={{ height: height_150 }} className="flats_150"></div>
            <div style={{ height: height_90_150 }} className="flats_90_150"></div>
            <div style={{ height: height_60_90 }} className="flats_60_90"></div>
            <div style={{ height: height_unknown }} className="unknown"></div>
            <div style={{ height: height_0_60 }} className="flats_0_60"></div>

            {isPositiveGrowth ? 
            <div className="growth">
                <img src={construction} alt="Construction" />
                </div>
                : null
            }
            
            </div>
        </div>
    );
}

export default House;