import construction from './assets/construction.svg';
import { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
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
    return (
        <motion.div className="windows">
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
        </motion.div>
    );
};

const House = ({ houseData, setSelected }: { houseData: HouseData, setSelected: Dispatch<SetStateAction<number>>}) => {
    const height_0_60 = Math.round(houseData.flats * houseData.flats_0_60 / 140);
    const height_60_90 = Math.round(houseData.flats * houseData.flats_60_90 / 140);
    const height_90_150 = Math.round(houseData.flats * houseData.flats_90_150 / 140);
    const height_150 = Math.round(houseData.flats * houseData.flats_150 / 140);
    const height_unknown = Math.round(houseData.flats * houseData.unknown / 140);

    const isPositiveGrowth = houseData.growth > 0;

    const highestFlatCategory = Math.max(houseData.hotels, houseData.offices, houseData.industrial);

    
    const highestFlatCategoryName = highestFlatCategory === houseData.hotels ? "hotels" : highestFlatCategory === houseData.offices ? "offices" : "industrial";

    const shape = highestFlatCategoryName === "hotels" ? "rectangle" : highestFlatCategoryName === "offices" ? "circle" : "tilted";
    //Get the number of windows based on the number of highest flat category name
    const windowCount = (Math.floor(highestFlatCategory / 100));

    return (
        <div className='house-container' onClick={() => setSelected(houseData.id)}>
        <h1>{houseData.name}</h1>
            <motion.div className="house"
                initial={{ height: 0}}
                animate={{ height: "auto", transition: { duration: 1, ease: [.14, .8, .4, 1] } }}
            >
            <Windows shape={shape} count={windowCount} />
            
                <div data-hover={Math.round(houseData.flats_150 * houseData.flats)} style={{ height: height_150 }} className="flats_150 cursor-anchor"></div>
                <div data-hover={Math.round(houseData.flats_90_150 * houseData.flats)} style={{ height: height_90_150 }} className="flats_90_150 cursor-anchor"></div>
                <div data-hover={Math.round(houseData.flats_60_90 * houseData.flats)} style={{ height: height_60_90 }} className="flats_60_90 cursor-anchor"></div>
                {height_unknown !== 0 ? <div data-hover={Math.round(houseData.unknown * houseData.flats)} style={{ height: height_unknown, minHeight: height_unknown > 0 ? "2px" : 0 }} className="unknown cursor-anchor"></div> : null}
                <div data-hover={Math.round(houseData.flats_0_60 * houseData.flats)} style={{ height: height_0_60 }} className="flats_0_60 cursor-anchor"></div>
            {isPositiveGrowth ? 
            <div className="growth">
                <img src={construction} alt="Construction" />
                </div>
                : null
            }
            
            </motion.div>
        </div>
    );
}

export default House;