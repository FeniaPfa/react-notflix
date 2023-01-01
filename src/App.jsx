import { useFetch } from "./components/MiApi";
import { useState } from "react";
import Search from "./components/Search";
import SortFilter from "./components/SortFilter";
const App = () => {


    // const [searchValue, setSearchValue] = useState("")
    const [filteredList, setFilteredList] = useState([])

    const baseUrl = "https://image.tmdb.org/t/p/w500";
    const apiUrl =
        "https://api.themoviedb.org/3/tv/top_rated?api_key=1cf50e6248dc270629e802686245c2c8&language=es";

    const { data, loading, error } = useFetch(apiUrl);
    if (loading) {
        return <p>Loading data...</p>;
    }
    if (error) {
        return <p>error</p>;
    }

    // const filteredList = data.results.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))

    return (
        <>
            <h1>Fetch</h1>
            <Search setFilteredList={setFilteredList} data={data}/>
            <SortFilter filteredList={filteredList} setFilteredList={setFilteredList}/>

            <ul style={{ display: "flex", flexWrap: "wrap" }}>
                {filteredList.map((item) => (
                    <li key={item.name}>
                        <p>{item.name}</p>
                        <p>{item.vote_average}</p>
                        <img src={baseUrl + item.poster_path} width="200px" />
                    </li>
                ))}
            </ul>
        </>
    );
};
export default App;
