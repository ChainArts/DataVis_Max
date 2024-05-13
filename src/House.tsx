const House = ({ height } : {height: number} ) => {
    return (
        <div style={{height: height}} className="house">
            <h1>House</h1>
            <p>Height: {height}</p>
        </div>
    );
}

export default House;