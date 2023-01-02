import { useFetch } from "./components/MiApi";
import { useState } from "react";
import Search from "./components/Search";
import SortFilter from "./components/SortFilter";
import Header from "./components/Header";
const App = () => {

    const [filteredList, setFilteredList] = useState([]);

    const imgUrl = "https://image.tmdb.org/t/p/original";
    const cardImgUrl = "https://image.tmdb.org/t/p/w500"

    const { data, loading, error, randomData } = useFetch();

    if (loading) {
        return <p>Loading data...</p>;
    }
    if (error) {
        return <p>{error.msg} Error: {error.code}</p>;
    }

    

    return (
        <>
            {/* <h1>Notflix</h1> */}

            <Header randomData={randomData} imgUrl={imgUrl}/>

            <Search setFilteredList={setFilteredList} data={data} />
            <SortFilter
                filteredList={filteredList}
                setFilteredList={setFilteredList}
            />

            <ul style={{ display: "flex", flexWrap: "wrap" }}>
                {filteredList.map((item) => (
                    <li key={item.name}>
                        <p>{item.name}</p>
                        <p>{item.vote_average}</p>
                        <img src={cardImgUrl + item.poster_path} width="200px" />
                    </li>
                ))}
            </ul>
        </>
    );
};
export default App;
