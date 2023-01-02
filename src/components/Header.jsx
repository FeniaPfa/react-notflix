const Header = ({ imgUrl, randomData }) => {
    return (
        <div style={{height: "40rem", position:"relative", overflow:"hidden"}}>
            {/* {randomShow.name} */}
            <img
                src={imgUrl + randomData?.backdrop_path}
                alt="random"
                style={{width:"100%", objectFit: "cover"}}
            />
        </div>
    );
};

export default Header;
