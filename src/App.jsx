import { useShows } from "./components/useShows";
import { useState } from "react";
import { Stack } from "@mui/material";
import { ItemList, Search, SortFilter, Loading, Header } from "./components";

const App = () => {
    const [filteredList, setFilteredList] = useState([]);

    const { data, loading, error, headerData, setHeaderData } = useShows();

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return (
            <p className="error">
                {error.msg} Error: {error.code}
            </p>
        );
    }

    return (
        <>
            <Header headerData={headerData} />

            <Stack
                direction="row"
                sx={{
                    justifyContent: "center",
                    margin: "2rem 1rem",
                    flexWrap: "wrap",
                    gap: "3rem",
                }}
            >
                <Search setFilteredList={setFilteredList} data={data} />
                <SortFilter
                    filteredList={filteredList}
                    setFilteredList={setFilteredList}
                />
            </Stack>

            <ItemList
                filteredList={filteredList}
                setHeaderData={setHeaderData}
            />
        </>
    );
};
export default App;
