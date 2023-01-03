import { useFetch } from "./components/MiApi";
import { useState } from "react";
import Search from "./components/Search";
import SortFilter from "./components/SortFilter";
import Header from "./components/Header";
import { Stack } from "@mui/material";
import ItemList from "./components/ItemList";
const App = () => {

    const [filteredList, setFilteredList] = useState([]);

    const imgUrl = "https://image.tmdb.org/t/p/original";
    const cardImgUrl = "https://image.tmdb.org/t/p/w500"

    const { data, loading, error, headerData, setHeaderData } = useFetch();

    if (loading) {
        return <p>Loading data...</p>;
    }
    if (error) {
        return <p>{error.msg} Error: {error.code}</p>;
    }

    return (
        <>

            <Header headerData={headerData} imgUrl={imgUrl}/>

            <Stack direction="row" sx={{
                justifyContent: "center",
                margin: "2rem 1rem",
                flexWrap:"wrap",
                gap:"3rem"
            }}>

            <Search setFilteredList={setFilteredList} data={data} />
            <SortFilter
                filteredList={filteredList}
                setFilteredList={setFilteredList}
            />
            </Stack>
            
            <ItemList filteredList={filteredList} cardImgUrl={cardImgUrl} setHeaderData={setHeaderData}/>


        </>
    );
};
export default App;
